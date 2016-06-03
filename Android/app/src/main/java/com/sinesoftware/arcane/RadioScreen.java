package com.sinesoftware.arcane;

import android.content.Context;
import android.widget.ImageView;

/****************************************************************************
 * RadioScreen
 * This is a Singleton class to prevent multiple instances of the radio being
 * played.
 ****************************************************************************/
public class RadioScreen {
    private static RadioScreen instance;
    private static Context context;


    private static PlaySongs currentlyPlaying;
    private static ImageView iv = null;

    public static void initInstance(Context context) {
        if (instance == null) {
            instance = new RadioScreen(context);
        }
    }

    public static RadioScreen getInstance() {
        return instance;
    }

    private RadioScreen(Context context) {
        //Constructor
        this.context = context;
    }



    //TODO Remove notification on kill



    public void startSongs(ImageView iv) {
        this.iv = iv;
        new DownloadImageTask(iv).execute("http://www.writerscafe.org/uploads/stories/30138000-1243997657.jpg");
        String[] songs = { "http://10.42.0.98:80/Bastille/Things.mp3", "http://10.42.0.98:80/Muse/Madness.mp3", "http://10.42.0.98:80/Bastille/Things.mp3", "http://10.42.0.98:80/Muse/Madness.mp3"};
        currentlyPlaying = new PlaySongs();
        currentlyPlaying.execute(songs);
    }

    public void skipSong() {
        currentlyPlaying.skip();
    }

    public void repeatSong() {
        currentlyPlaying.repeat();
    }

    public void pauseSong() {
        currentlyPlaying.pause();
    }

    public void resume() {
        currentlyPlaying.resume();
    }

    public static Context getContext() {
        return context;
    }

    public ImageView getIV() {
        return iv;
    }
}
