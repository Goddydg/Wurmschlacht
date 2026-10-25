# Wurmschlacht

Rundenbasiertes Artillerie-Spiel im Stil von Worms für 2–4 Spieler, an einem Handy oder mit mehreren Handys und dem Spielfeld auf dem Fernseher. Läuft im Browser, veröffentlicht über GitHub Pages: https://goddydg.github.io/Wurmschlacht/

## Zusammenarbeit

- Der Besitzer spricht Deutsch und spielt vor allem am Handy. Antworten, Commit-Nachrichten, Pull Requests und alle Texte im Spiel auf Deutsch. Code-Kommentare auf Englisch, knapp, im Stil der vorhandenen.
- Arbeitsweise: neuer Branch von `main`, Änderung umsetzen und testen, pushen, dann fragen, ob übernommen werden soll. Erst nach einem „Ja“ einen Pull Request erstellen und mergen. Danach ist die Änderung nach 1–2 Minuten auf GitHub Pages.
- Bei Wünschen zu Aussehen oder Klang: Screenshots oder Hörproben zeigen, bevor übernommen wird. Geräusche können hier nicht angehört werden, nur gemessen; das offen sagen.
- `README.md` mit jeder Funktion aktuell halten (Spielerdoku auf Deutsch).
- Wenn Pushes mit 403 scheitern: Meist ist die Claude GitHub App pausiert. Der Besitzer hebt das unter GitHub → Settings → Applications → Claude → „Unsuspend“ auf.

## Aufbau

Alles Wichtige steckt in einer Datei: `index.html` (Stil, Markup, Spiellogik auf Canvas, kein Build-Schritt, keine Abhängigkeiten). Nur der Modus „Mehrere Handys“ lädt bei Bedarf PeerJS und qrcode-generator von jsDelivr.

Abschnitte im Skript (`/* ---------- name ---------- */`):

| Abschnitt | Inhalt |
| --- | --- |
| terrain | `THEMES` (Farben, Flüssigkeit `liq`), `FX` (Himmel, Wetter, Deko-Flags), `groundHeight`/`keyPoints` je Geländeform, `decorate`, `genTerrain`, Kollisionsmaske `mask` |
| landscape structures | Bauwerke je Welt: `BUILD` (Haupt-Bauwerke), `MORE` (Ankerpunkte), `FILL` + `fillAnchors` (Lückenfüller fürs Seil). Feste Teile vor der Maske malen; reine Deko in `post` (wird danach gemalt, zählt nicht als Boden). `S.hollow` schneidet begehbare Innenräume aus. |
| worms / worm characters | Physik der Würmer; Aussehen, Persönlichkeiten, Sprüche (`LINES`), Gedächtnis pro Spieler in `localStorage` (`wurm-roster`) |
| explosions, mines/barrels/crates | Explosionen, Kisten (Inhalt an Form/Farbe erkennbar), Flugzeug für Kistenabwurf |
| weapon actions, ninja rope | Waffen (`WEAPONS`-Tabelle am Skriptanfang), Enterhaken-Seil (`ROPE_MAX`) |
| turns / actions | Zugablauf, Teams (`G.ally`, `nextTeam`), Sudden Death, Einstellungen speichern (`wurm-setup`) |
| computer player | KI: simuliert Schüsse mit der Spielphysik, sammelt Kisten |
| sound | Synthetisierte Geräusche (Web Audio) und „Wurmisch“-Sprachsynthese (`wormSpeak`) |
| several phones | Spielleiter/Controller über PeerJS (WebRTC), Raumcode, Herzschlag, Wiederverbinden |
| sky, drawing | Himmel, Wetter, Würmer, Sprechblasen, Partikel |

Weitere Dateien: `manifest.webmanifest` und `icons/` (Home-Bildschirm-Icon, neu erzeugen mit `node icons/make-icons.js`), `tools/smoke-test.js`.

## Testen

Ohne Build: `index.html` direkt über `file://` öffnen. Playwright mit Chromium ist in der Cloud-Umgebung vorinstalliert.

- Schnelltest: `node tools/smoke-test.js` spielt je Landschaft eine Computer-Partie und meldet Skriptfehler (`node tools/smoke-test.js wiese,schiff` für eine Auswahl).
- Bildschirmfotos: In eigenen Skripten `requestAnimationFrame` per `addInitScript` ersetzen, um Zeit vorzuspulen oder Einzelbilder zu machen. Nach dem Spielstart kurz echt warten (die Spielfläche bekommt ihre Größe über einen ResizeObserver), sonst bleibt das Bild leer.
- Mehrere Handys lokal testen: PeerJS-Server (`npm i peer`) auf 127.0.0.1:9000 starten, das Spiel über einen lokalen Webserver mit `?signal=127.0.0.1:9000` öffnen und CDN-Aufrufe per `page.route` auf lokale `node_modules` umleiten. Chromium mit `--disable-features=WebRtcHideLocalIpsWithMdns` starten.
- Immer auch auf Handybreite (360–390 px) prüfen: kein seitliches Scrollen im Startmenü.
