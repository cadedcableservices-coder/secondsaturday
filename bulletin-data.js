/* =====================================================================
   SECOND SATURDAY — MONTHLY BULLETIN
   ---------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT EACH MONTH.

   The website automatically shows the NEXT upcoming night as the big
   featured card, and lists the ones after it as "upcoming."
   Past dates disappear on their own.

   HOW TO EDIT:
   1. Change the text inside the "quotes".
   2. Keep the date in the format  "YYYY-MM-DD"  (year-month-day).
   3. Keep every comma and curly brace exactly where they are.
   4. Save the file, then commit/push (or edit it right on GitHub.com).

   You can leave any field as an empty "" and it just won't show.
   ===================================================================== */

window.SS_BULLETIN = {

  /* Optional banner shown at the top of the "This Month" section.
     Leave as "" to hide it. */
  announcement: "Mark your calendar — a worship night every month. Check the dates below.",

  /* The list of worship nights. Add, remove, or edit freely.
     The one with the soonest future date becomes the featured card. */
  events: [
    {
      date: "2026-07-11",          // YYYY-MM-DD
      time: "6:00 PM",
      title: "July Worship Night",
      location: "Lycoming Valley Baptist Church · 4980 Lycoming Mall Dr, Montoursville, PA 17754",
      theme: "An evening of worship, prayer, and the Word",
      details: "Doors open 30 minutes early for fellowship. Bring a friend — everyone is welcome, no matter where you are on your journey of faith.",
      rsvp: ""                      // optional link, e.g. "https://..."  (leave "" for none)
    },
    {
      date: "2026-08-15",
      time: "6:00 PM",
      title: "August Worship Night",
      location: "Community Mennonite Fellowship · 2985 Broadway Rd, Milton, PA 17847",
      theme: "An evening of worship, prayer, and the Word",
      details: "",
      rsvp: ""
    },
    {
      date: "2026-09-12",
      time: "6:00 PM",
      title: "September Worship Night",
      location: "Location announced soon",
      theme: "An evening of worship, prayer, and the Word",
      details: "",
      rsvp: ""
    },
    {
      date: "2026-10-10",
      time: "6:00 PM",
      title: "October Worship Night",
      location: "Location announced soon",
      theme: "An evening of worship, prayer, and the Word",
      details: "",
      rsvp: ""
    },
    {
      date: "2026-11-14",
      time: "6:00 PM",
      title: "November Worship Night",
      location: "Location announced soon",
      theme: "An evening of worship, prayer, and the Word",
      details: "",
      rsvp: ""
    },
    {
      date: "2026-12-12",
      time: "6:00 PM",
      title: "December Worship Night",
      location: "Location announced soon",
      theme: "An evening of worship, prayer, and the Word",
      details: "",
      rsvp: ""
    }
  ],

  /* Optional free-form notes / announcements shown on the bulletin board.
     Add or remove lines. Leave the list empty [] to hide the board. */
  notes: [
    "Fellowship before and after every night.",
    "Want to host Second Saturday at your church? Reach out — we'd love to talk.",
    "Follow along and invite a friend — anyone can invite anyone."
  ]
};
