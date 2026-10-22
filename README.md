# Wurmschlacht

Rundenbasiertes Artillerie-Spiel für drei Spieler an einem Handy. Die Würmer kämpfen auf zerstörbarem Gelände, mit Wind, Bazooka, Granate und Dynamit. Wer als Letzter noch einen Wurm hat, gewinnt.

Das Spiel ist eine einzige Datei (`index.html`) ohne Build-Schritt und ohne Abhängigkeiten. Nur die beiden Schriften kommen von Google Fonts. Ohne Netz läuft es mit Ersatzschriften.

## Spielen

Datei `index.html` im Browser öffnen, am besten auf dem Handy.

Mit GitHub Pages lässt es sich als Webseite bereitstellen: In den Repo-Einstellungen unter *Pages* den Branch `main` und den Ordner `/ (root)` wählen. Bei einem privaten Repo ist Pages je nach GitHub-Tarif nicht verfügbar.

## Bedienung

| Knopf | Wirkung |
| --- | --- |
| Links / Rechts | Wurm laufen lassen |
| Höher / Tiefer | Zielwinkel ändern |
| Sprung | Springen |
| Feuer (halten) | Kraft aufladen, beim Loslassen schießen |
| Karte | Ganze Karte anzeigen |

Tastatur am Rechner: Pfeiltasten, `J` für Sprung, Leertaste für Feuer.

**Waffen:** Bazooka (wird vom Wind abgelenkt), Granate (springt, explodiert nach 3 Sekunden) und Dynamit (wird abgelegt, pro Team 2×).

**Ablauf:** Die Teams sind abwechselnd dran, pro Zug gibt es 30 Sekunden. Nach dem Schuss bleibt kurz Zeit zum Rückzug. Danach erscheint die Übergabe an das nächste Team. Würmer, die ins Wasser fallen, scheiden aus. Zu Beginn wählst du 2, 3 oder 4 Würmer pro Team.

## Aufbau

Alles steckt in `index.html`: Stil, Markup und Spiellogik (Canvas). Die Spielfeldgröße, die Waffenwerte (`WEAPONS`) und die Teamfarben (`COL`) stehen am Anfang des Skripts.
