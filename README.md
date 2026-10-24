# Wurmschlacht

Rundenbasiertes Artillerie-Spiel für drei Spieler an einem Handy. Die Würmer kämpfen auf zerstörbarem Gelände, mit Wind, zwölf Waffen, Kisten, Minen und Ölfässern. Wer als Letzter noch einen Wurm hat, gewinnt.

Das Spiel ist eine einzige Datei (`index.html`) ohne Build-Schritt und ohne Abhängigkeiten. Nur die beiden Schriften kommen von Google Fonts. Ohne Netz läuft es mit Ersatzschriften.

## Spielen

Datei `index.html` im Browser öffnen, am besten auf dem Handy.

Mit GitHub Pages lässt es sich als Webseite bereitstellen: In den Repo-Einstellungen unter *Pages* den Branch `main` und den Ordner `/ (root)` wählen.

## Bedienung

| Knopf | Wirkung |
| --- | --- |
| Links / Rechts | Wurm laufen lassen, am Seil schwingen |
| Höher / Tiefer | Zielwinkel ändern, am Seil die Länge ändern |
| Sprung | Springen, am Seil loslassen |
| Waffenleiste | Waffenmenü öffnen, nur während des Zielens |
| Feuer | Bazooka, Granate und Clusterbombe: halten für Kraft, loslassen zum Schießen. Alle anderen Waffen: antippen |

**Zoomen und Verschieben:** Zwei Finger auseinander oder zusammen ziehen zoomt, ein Finger verschiebt die Ansicht, am Rechner zoomt das Mausrad. Die Knöpfe `+` und `−` am rechten Rand zoomen schrittweise, der Knopf mit dem Fadenkreuz springt zurück zum aktiven Wurm. Der Knopf `Karte` oben links zeigt das ganze Spielfeld.

Tastatur am Rechner: Pfeiltasten, `J` für Sprung, Leertaste für Feuer.

## Waffen

| Waffe | Munition | Besonderheit |
| --- | --- | --- |
| Bazooka | unbegrenzt | Wind lenkt die Rakete ab |
| Granate | unbegrenzt | springt, explodiert nach 3 Sekunden |
| Clusterbombe | 2 | zerfällt in 5 kleine Bomben |
| Schrotflinte | 4 | 2 Schüsse pro Zug |
| Schläger | 3 | schleudert Gegner in Zielrichtung weg |
| Dynamit | 2 | wird abgelegt, 4 Sekunden Zündzeit |
| Mine | 2 | scharf nach kurzer Zeit, zündet bei Annäherung |
| Sprengschaf | 1 | läuft los, explodiert bei Kontakt, nach 5 Sekunden oder per Feuer-Tipp |
| Kamikaze | 1 | der Wurm fliegt in Zielrichtung los, explodiert beim Aufprall und opfert sich dabei |
| Luftschlag | 1 | Ziel auf der Karte antippen, 5 Bomben fallen |
| Teleport | 1 | Ziel antippen, der Zug geht danach weiter |
| Ninja-Seil | 5 | siehe unten, der Zug geht weiter |

**Ninja-Seil:** Zielen und `Seil` antippen, das Seil hakt am nächsten Gelände in bis zu etwa 280 Pixeln Entfernung ein. Links und Rechts bringen den Wurm zum Schwingen, Höher und Tiefer kürzen und verlängern das Seil. Mit `Loslassen` oder `Sprung` lässt der Wurm los und fliegt mit seinem Schwung weiter. Die Munition wird pro Zug nur einmal verbraucht, innerhalb des Zugs kannst du das Seil beliebig oft einhaken. Eine Explosion in der Nähe, das Zugende und ein weggesprengter Haken lösen das Seil ebenfalls.

## Kisten und Hindernisse

- **Erste-Hilfe-Kiste:** gibt dem Wurm, der sie berührt, 35 HP (bis maximal 150).
- **Waffenkiste:** gibt dem Team Munition für eine Waffe.
- **Kisten** fallen zu Beginn eines Zugs mit etwa 50 % Wahrscheinlichkeit an einem Fallschirm vom Himmel.
- **Minen** liegen von Anfang an auf der Karte und zünden, wenn ein Wurm zu nah kommt.
- **Ölfässer** explodieren bei Treffern und zünden benachbarte Fässer.

## Ablauf

Die Teams sind abwechselnd dran, pro Zug gibt es 30 Sekunden. Nach dem Schuss bleibt kurz Zeit zum Rückzug. Danach erscheint die Übergabe an das nächste Team. Würmer, die ins Wasser fallen, scheiden aus. Zu Beginn wählst du 2, 3 oder 4 Würmer pro Team.

## Aufbau

Alles steckt in `index.html`: Stil, Markup und Spiellogik (Canvas). Die Spielfeldgröße, die Waffentabelle (`WEAPONS`) und die Teamfarben (`COL`) stehen am Anfang des Skripts.
