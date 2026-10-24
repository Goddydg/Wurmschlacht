# Wurmschlacht

Rundenbasiertes Artillerie-Spiel für zwei bis vier Spieler, an einem Handy oder mit einem Handy pro Spieler und dem Spielfeld auf dem Fernseher, auch gegen den Computer. Die Würmer kämpfen auf zerstörbarem Gelände in fünf Landschaften, mit Wind, zwölf Waffen, Kisten, Minen und Ölfässern. Wer als Letzter noch einen Wurm hat, gewinnt.

Das Spiel ist eine einzige Datei (`index.html`) ohne Build-Schritt. Die beiden Schriften kommen von Google Fonts, ohne Netz läuft es mit Ersatzschriften. Nur der Modus *Mehrere Handys* lädt bei Bedarf zwei Bibliotheken nach (PeerJS für die Verbindung, qrcode-generator für den QR-Code) und braucht dafür Internet.

## Spielen

Datei `index.html` im Browser öffnen, am besten auf dem Handy.

Mit GitHub Pages lässt es sich als Webseite bereitstellen: In den Repo-Einstellungen unter *Pages* den Branch `main` und den Ordner `/ (root)` wählen.

## Mehrere Handys und Fernseher

Ein Gerät ist der Spielleiter und zeigt das Spielfeld, am besten auf dem Fernseher: ein Laptop am HDMI-Kabel, ein Smart-TV-Browser oder ein Handy bzw. Tablet, dessen Bildschirm per Chromecast, AirPlay oder Miracast gespiegelt wird. Alle anderen nehmen ihr eigenes Handy als Controller.

1. Das Spiel muss über eine Webadresse laufen, zum Beispiel über GitHub Pages (siehe oben). Als lokale Datei können die Handys den Link nicht öffnen.
2. Auf dem Spielleiter-Gerät *Mehrere Handys* wählen. Es erscheinen ein Raumcode aus vier Buchstaben und ein QR-Code.
3. Jeder scannt den QR-Code mit dem Handy, gibt seinen Namen ein und tippt *Beitreten*. Alternativ die Seite öffnen, *Mit diesem Handy einem Raum beitreten* wählen und den Code eintippen. Jedes Handy bekommt ein freies Team, bei Bedarf wird die Spielerzahl erhöht.
4. Übrige Teams können *Computer* sein oder am Spielleiter-Gerät gespielt werden. Dann *Spiel starten*.

Wer dran ist, spürt eine kurze Vibration und sieht auf dem Handy dieselben Knöpfe wie sonst: Laufen, Zielen, Springen, Waffen wählen und Feuer. Die Ziele für Luftschlag und Teleport werden mit den Pfeilknöpfen verschoben, weil das Handy keine Karte zeigt. Am Fernseher verschwinden die Knöpfe, solange ein Handy oder der Computer spielt. Die Übergabe-Seite entfällt.

Fällt ein Handy aus (Akku leer, Browser geschlossen), merkt der Spielleiter das nach etwa acht Sekunden und zeigt die Knöpfe für dieses Team selbst an. Ein Handy, das die Seite neu lädt und wieder beitritt, bekommt sein altes Team zurück. Bei kurzen Aussetzern verbindet sich das Handy selbst neu.

Die Handys verbinden sich direkt mit dem Spielleiter (WebRTC). Der öffentliche PeerJS-Server hilft nur beim Finden. Wer einen eigenen PeerJS-Server betreibt, hängt `?signal=host:port` an die Adresse des Spielleiters, die Handys übernehmen das über den Link.

## Bedienung

| Knopf | Wirkung |
| --- | --- |
| Links / Rechts | Wurm laufen lassen, am Seil schwingen |
| Höher / Tiefer | Zielwinkel ändern, am Seil die Länge ändern |
| Sprung | Springen, am Seil loslassen |
| Waffenleiste | Waffenmenü öffnen, nur während des Zielens |
| Feuer | Bazooka, Granate und Clusterbombe: halten für Kraft, loslassen zum Schießen. Alle anderen Waffen: antippen |

**Ton:** Der Knopf mit dem Lautsprecher am rechten Rand schaltet die Geräusche aus und wieder an. Die Einstellung bleibt gespeichert.

**Zoomen und Verschieben:** Zwei Finger auseinander oder zusammen ziehen zoomt, ein Finger verschiebt die Ansicht, am Rechner zoomt das Mausrad. Die Knöpfe `+` und `−` am rechten Rand zoomen schrittweise, der Knopf mit dem Fadenkreuz springt zurück zum aktiven Wurm. Der Knopf `Karte` oben links zeigt das ganze Spielfeld.

Tastatur am Rechner: Pfeiltasten, `J` für Sprung, Leertaste für Feuer.

Bei Luftschlag und Teleport tippst du das Ziel auf der Karte an oder verschiebst das Fadenkreuz mit den Pfeilen.

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

## Landschaften

Im Startmenü wählst du die Landschaft oder lässt den Zufall entscheiden.

| Landschaft | Gelände | Besonderheit |
| --- | --- | --- |
| Wiese | sanfte Hügel, zwei Schluchten | Bäume |
| Wüste | Dünen und zwei Tafelberge | Kakteen, Felswände am Rand |
| Winter | spitze Grate, eine tiefe Kluft | Schnee, die Würmer rutschen auf dem Eis nach |
| Inseln | vier Inseln im Meer | Palmen, viel Wasser |
| Vulkan | ein großer Kegel mit Krater | Lava statt Wasser, Lavagruben an den Seiten |

Bäume, Kakteen und Felsen sind nur Deko: Sie halten nichts auf und werden mit dem Gelände weggesprengt.

## Kisten und Hindernisse

- **Erste-Hilfe-Kiste:** gibt dem Wurm, der sie berührt, 35 HP (bis maximal 150).
- **Waffenkiste:** gibt dem Team Munition für eine Waffe.
- **Kisten** fallen zu Beginn eines Zugs mit etwa 50 % Wahrscheinlichkeit an einem Fallschirm vom Himmel.
- **Minen** liegen von Anfang an auf der Karte und zünden, wenn ein Wurm zu nah kommt.
- **Ölfässer** explodieren bei Treffern und zünden benachbarte Fässer.

## Ablauf

Zu Beginn wählst du 2, 3 oder 4 Spieler, für jeden Spieler *Mensch* oder *Computer*, und 2, 3 oder 4 Würmer pro Team.

Jedes Team merkt sich seine zuletzt gewählte Waffe. Die Teams sind abwechselnd dran, pro Zug gibt es 30 Sekunden. Nach dem Schuss bleibt kurz Zeit zum Rückzug. Danach erscheint die Übergabe an das nächste Team. Die Übergabe entfällt, wenn der Computer dran ist oder nur noch ein Mensch mitspielt. Würmer, die ins Wasser fallen, scheiden aus.

**Sudden Death:** Nach sechs Runden steigt das Wasser (beim Vulkan die Lava) zu Beginn jedes Zugs ein Stück. Tief liegende Würmer müssen nach oben, sonst ertrinken sie.

## Computer-Gegner

Der Computer spielt Bazooka, Granate und Schrotflinte. Er rechnet vor dem Schuss viele Winkel und Stärken mit derselben Physik durch, die auch das Spiel nutzt, und berücksichtigt dabei Wind, Abpraller und Ölfässer. Treffer am eigenen Team vermeidet er. Damit er nicht perfekt trifft, streut er Winkel und Kraft ein wenig. Findet er kein lohnendes Ziel, läuft er auf den nächsten Gegner zu und sucht erneut.

## Aufbau

Alles steckt in `index.html`: Stil, Markup und Spiellogik (Canvas). Die Spielfeldgröße, die Waffentabelle (`WEAPONS`), die Teamfarben (`COL`) und die Sudden-Death-Werte (`SD_ROUNDS`, `SD_RISE`) stehen am Anfang des Skripts. Die Landschaften stehen in `THEMES`, das Spiel mit mehreren Handys im Abschnitt `several phones`. Der Computer-Gegner steckt im Abschnitt `computer player`, die Geräusche werden im Abschnitt `sound` mit der Web Audio API erzeugt, ohne Audiodateien.
