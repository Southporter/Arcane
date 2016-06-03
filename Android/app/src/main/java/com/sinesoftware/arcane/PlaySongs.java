package com.sinesoftware.arcane;

import android.media.MediaPlayer;
import android.media.AudioManager;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.Toast;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import android.os.Handler;

/**
 * PlaySongs
 *
 * This class takes a list of URLs to songs and plays them one after the other.
 *
 * @author Rhuarc13
 */
public class PlaySongs extends AsyncTask<String, String, String> {
    private MediaPlayer[] mediaPlayers = new MediaPlayer[2];
    private boolean playerFinished = true;
    private final String TAG = "PLAYSONG";
    private Handler handler;
    private String[] songs;
    private int i;

    @Override
    protected String doInBackground(String... params) {

        songs = params;
        i = 0;
        handler = new Handler(RadioScreen.getInstance().getContext().getMainLooper());

        prepareNext();

        do {
            if (playerFinished) {
                mediaPlayers[i % 2 ].start();
                playerFinished = false;
                i++;
                prepareNext();
            }
        } while (i < params.length);

        return null;
    }


    /**************************************************
     *  skip()
     *
     *  Skip the current song. Move on to the next.
     *
     **************************************************/
    public void skip() {
        mediaPlayers[(i - 1) % 2].stop();
        mediaPlayers[(i - 1) % 2].release();
        mediaPlayers[i % 2 ].start();
        playerFinished = false;
        i++;
        prepareNext();
    }

    /**************************************************
     *  prepareNext()
     *
     *  Prepare the other MediaPlayer with the next song.
     *
     **************************************************/
    private void prepareNext() {
        if (i < songs.length) {
            try {
                URL url = new URL(songs[i]);
                mediaPlayers[i % 2] = new MediaPlayer();
                mediaPlayers[i % 2].setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                    @Override
                    public void onCompletion(MediaPlayer mp) {
                        mp.release();
                        playerFinished = true;
                    }
                });
                mediaPlayers[i % 2].setAudioStreamType(AudioManager.STREAM_MUSIC);
                try {
                    mediaPlayers[i % 2].setDataSource(url.toString());
                    mediaPlayers[i % 2].prepare();
                    Log.i(TAG, "Starting Stream " + i);
                } catch (IOException ioe) {
                    Log.e(TAG, "Encountered IOException: " + ioe.toString());
                    handler.post(new Runnable() {
                        public void run() {
                            Toast.makeText(RadioScreen.getInstance().getContext(), "Sorry, an error occurred connecting to the database. Please try again later", Toast.LENGTH_LONG).show();
                        }
                    });
                    return;
                }
            } catch (MalformedURLException murle) {
                Log.e(TAG, "Malformed URL: " + murle.toString());
            }
        }
    }

    /*************************************************
     *  repeat()
     *
     *  This function is supposed to repeat the current
     *  song
     *
     *************************************************/
    public void repeat() {
        if (i != 0) {
            Log.i(TAG, "Resetting Stream " + (i - 1));
            mediaPlayers[(i - 1) % 2].pause();
            Log.i(TAG, "Seeking to front of Stream " + (i - 1));
            mediaPlayers[(i - 1) % 2].seekTo(0);
            Log.i(TAG, "Starting Stream " + (i - 1));
            mediaPlayers[(i - 1) % 2].start();
        }
    }

    public void pause() {
        if (i != 0) {
            mediaPlayers[(i - 1) % 2].pause();
        }
    }

    public void resume() {
        if (i != 0) {
            mediaPlayers[(i - 1) % 2].start();
        }
    }
}
