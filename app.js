import React, { useState } from "react";
import "./styles.css";
var songDictionary = {
  "Pop ": [
    { title: "Monster", singer: "Eminem & Rihanna", lyricist: "bebe rexha" },
    {
      title: " Therefore I am",
      singer: "Billie Eilish",
      lyricist: "Finneas O'canal"
    },
    {
      title: " positions",
      singer: "Ariana Grande",
      lyricist: "Angelina Barrett"
    },
    { title: " Holiday", singer: "lil nas x", lyricist: "David biral" }
  ],
  "Punjabi ": [
    { title: "Clash", singer: "Diljit Dosanjh", lyricist: "Raj Ranjodh" },
    {
      title: " baby girl",
      singer: "guru randhawa & Dhavni Bhanushali",
      lyricist: "Guru randhawa"
    },
    {
      title: "Naach Meri Raani",
      singer: "guru randhawa",
      lyricist: "guru randhawa"
    },
    { title: " Coca", singer: "karan aujla", lyricist: "jaani" }
  ],
  "Bollywood ": [
    { title: " Tarifan", singer: "badshah & qaran", lyricist: "badshah" },
    {
      title: " Taaro k shehar",
      singer: "neha kakkar & jubin nautiyal",
      lyricist: "jaani"
    },
    { title: " Namonishan", singer: "Jyotica tangri", lyricist: "Seepi jha" },
    {
      title: " Nayan",
      singer: "Amit trivedi",
      lyricist: "Amitabh bhattacharya"
    },
    {
      title: "Heer",
      singer: "harshdeep kaur",
      lyricist: "gulzar & a.r. rahman"
    }
  ],
  "Folk ": [
    { title: "Up in the clouds", singer: "skegss", lyricist: "jon lani" },
    { title: " Kingdom", singer: "downstait", lyricist: "v.x" },
    { title: " Hometown", singer: "theevs", lyricist: "marc anthony" }
  ],
  "Rock ": [
    { title: "Zidd ", singer: "amit singh", lyricist: "amit singh" },
    { title: " Hosh ha", singer: "alif", lyricist: "aman,hardik" },
    { title: " Ki Tum ho", singer: "chaar hazari", lyricist: "chaar hazaari" },
    {
      title: " Aashayein",
      singer: "kk & salim merchant",
      lyricist: "salim sulaiman"
    },
    { title: " Fade away", singer: "lanstan", lyricist: "stefan panelli" }
  ]
};
var categoriesWehave = Object.keys(songDictionary);

export default function App() {
  const [songsList, setSongList] = useState(songDictionary["Punjabi "]);
  function categoryClickHandler(category) {
    var songs = songDictionary[category];
    setSongList(songs);
  }
  function listOfsongs(songs) {
    var title = songs.title;
    var singer = songs.singer;
    var lyricist = songs.lyricist;
    var liststyling = (
      <div style={{ padding: "1rem", fontSize: "1rem", fontStyle: "oblique" }}>
        <li>Title : {title}</li>
        <li>Singer : {singer}</li>
        <li>Lyricist : {lyricist}</li>
      </div>
    );
    return liststyling;
  }

  return (
    <div className="App" style={{ backgroundColor: "black", color: "#34D399" }}>
      <h1>🎶 Song Store</h1>

      <h3 style={{ textAlignLast: "centre" }}> 🎧 Categories we have</h3>
      <div>
        {categoriesWehave.map(function (category) {
          return (
            <span
              style={{
                cursor: "pointer",
                backgroundColor: "#34D399",
                margin: "1rem",
                color: "black",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                display: "block"
              }}
              onClick={() => categoryClickHandler(category)}
              key={category}
            >
              {category}
            </span>
          );
        })}
      </div>

      <ul>
        {songsList.map((songs) => {
          return listOfsongs(songs);
        })}
      </ul>
    </div>
  );
}
