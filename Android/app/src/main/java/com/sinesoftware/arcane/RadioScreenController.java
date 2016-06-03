package com.sinesoftware.arcane;

import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.NavUtils;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.TaskStackBuilder;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

/**
 * RadioScreenController
 *
 * This class handles the Radio screen.
 *
 */
public class RadioScreenController extends AppCompatActivity {

    private ImageView iv;
    private static RadioScreen radioScreen; //Singleton so that only one radio actually exists
    private NotificationCompat.Builder mBuilder;
    private NotificationManager mNotificationManager;
    private int whichButtonFunction;
    private boolean firstClick = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        RadioScreen.initInstance(this.getApplicationContext());
        radioScreen = RadioScreen.getInstance();

        setContentView(R.layout.activity_radio_screen);
        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.setDisplayHomeAsUpEnabled(true);
        }

        iv = (ImageView) findViewById(R.id.song_canvas);
        if (radioScreen.getIV() != null) {
            iv.setImageDrawable(radioScreen.getIV().getDrawable());
        }
        iv.setOnTouchListener(new OnSwipeTouchListener(this) {
            @Override
            public void onSwipeTop() {
                Toast.makeText(RadioScreenController.this, "top", Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onSwipeRight() {
                Toast.makeText(RadioScreenController.this, "right", Toast.LENGTH_SHORT).show();
                skipSong(iv);
            }

            @Override
            public void onSwipeLeft() {
                Toast.makeText(RadioScreenController.this, "left", Toast.LENGTH_SHORT).show();
                repeatSong();
            }

            @Override
            public void onSwipeBottom() {
                Toast.makeText(RadioScreenController.this, "bottom", Toast.LENGTH_SHORT).show();
            }
        });

        whichButtonFunction = 0;
    }

    @Override
    protected void onPostCreate(Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);

        // Trigger the initial hide() shortly after the activity has been
        // created, to briefly hint to the user that UI controls
        // are available.
        hide();
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id == android.R.id.home) {
            // This ID represents the Home or Up button.
            NavUtils.navigateUpFromSameTask(this);
            return true;
        }
        return super.onOptionsItemSelected(item);
    }


    private void hide() {
        // Hide UI first
        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.hide();
        }
    }


    public void buttonControl(View v) {
        if (whichButtonFunction % 2 == 1) {
            pauseSong(v);
            whichButtonFunction++;
        } else {
            if (firstClick) {
                startSongs(v);
                firstClick = false;
                whichButtonFunction++;
            } else {
                resumeSong(v);
                whichButtonFunction++;
            }
        }
    }
    public void startSongs(View v) {
        radioScreen.startSongs(iv);
        ImageView playButton = (ImageView) findViewById(R.id.action_button);
        playButton.setImageResource(R.drawable.ic_pause_black_48dp);
        //setupNotification();
    }

    public void skipSong(View v) {
        radioScreen.skipSong();
    }

    private void repeatSong() {
        radioScreen.repeatSong();
    }

    public void pauseSong(View v) {
        radioScreen.pauseSong();
        ImageView playButton = (ImageView) findViewById(R.id.action_button);
        playButton.setImageResource(R.drawable.ic_pause_black_48dp);
    }

    public void resumeSong(View v) {
        radioScreen.resume();
        ImageView pauseButton = (ImageView) findViewById(R.id.action_button);
        pauseButton.setImageResource(R.drawable.ic_play_arrow_black_48dp);
    }

    /****************************************************
     *  setupNotification()
     *
     *  Set up a notification that can be used to control
     *  the playback of the songs.
     *
     *  TODO Change notification to have pause/play and skip buttons
     *  TODO Change notification text
     */
    private void setupNotification() {
        mBuilder =
                new NotificationCompat.Builder(this)
                        .setSmallIcon(R.mipmap.ic_launcher)
                        .setContentTitle("My notification")
                        .setContentText("Hello World!");
        // Creates an explicit intent for an Activity in your app
        Intent notificationIntent = new Intent(this, RadioScreen.class);
        notificationIntent.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_BROUGHT_TO_FRONT);
        // The stack builder object will contain an artificial back stack for the
        // started Activity.
        // This ensures that navigating backward from the Activity leads out of
        // your application to the Home screen.
        TaskStackBuilder stackBuilder = TaskStackBuilder.create(this);
        // Adds the back stack for the Intent (but not the Intent itself)
        stackBuilder.addParentStack(RadioScreen.class);
        // Adds the Intent that starts the Activity to the top of the stack
        stackBuilder.addNextIntent(notificationIntent);
        PendingIntent resultPendingIntent =
                stackBuilder.getPendingIntent(
                        0,
                        PendingIntent.FLAG_UPDATE_CURRENT
                );
        mBuilder.setContentIntent(resultPendingIntent);
        mNotificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        // mId allows you to update the notification later on.
        mNotificationManager.notify(13, mBuilder.build());
    }
}
