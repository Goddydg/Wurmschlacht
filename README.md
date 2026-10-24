# Wurmschlacht

Rundenbasiertes Artillerie-Spiel für zwei bis vier Spieler, an einem Handy oder mit einem Handy pro Spieler und dem Spielfeld auf dem Fernseher, auch gegen den Computer. Die Würmer kämpfen auf zerstörbarem Gelände in fünf Landschaften, mit Wind, zwölf Waffen, Kisten, Minen und Ölfässern. Wer als Letzter noch einen Wurm hat, gewinnt.

Das Spiel ist eine einzige Datei (`index.html`) ohne Build-Schritt. Die beiden Schriften kommen von Google Fonts, ohne Netz läuft es mit Ersatzschriften. Nur der Modus *Mehrere Handys* lädt bei Bedarf zwei Bibliotheken nach (PeerJS für die Verbindung, qrcode-generator für den QR-Code) und braucht dafür Internet.

## Spielen

Datei `index.html` im Browser öffnen, am besten auf dem Handy.

Mit GitHub Pages lässt es sich als Webseite bereitstellen: In den Repo-Einstellungen unter *Pages* den Branch `main` und den Ordner `/ (root)` wählen.

**Auf den Home-Bildschirm:** Auf dem iPhone in Safari über *Teilen → Zum Home-Bildschirm*, auf Android in Chrome über das Menü *Zum Startbildschirm hinzufügen* bzw. *App installieren*. Die Verknüpfung zeigt das Wurm-Icon und öffnet das Spiel ohne Adressleiste wie eine App. Die Icons in `icons/` werden mit `node icons/make-icons.js` aus der Wurm-Zeichnung des Spiels erzeugt.

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

**Ton:** Alle Geräusche werden im Browser erzeugt: Explosionen, Schüsse, Wasser, Stimmen und ein Ticken in den letzten fünf Sekunden. Sie kommen von links oder rechts, je nachdem, wo es knallt. Der Knopf mit dem Lautsprecher am rechten Rand schaltet die Geräusche aus und wieder an. Die Einstellung bleibt gespeichert.

**Zoomen und Verschieben:** Zwei Finger auseinander oder zusammen ziehen zoomt, ein Finger verschiebt die Ansicht, am Rechner zoomt das Mausrad. Die Knöpfe `+` und `−` am rechten Rand zoomen schrittweise, der Knopf mit dem Fadenkreuz springt zurück zum aktiven Wurm. Der Knopf `Karte` oben links zeigt das ganze Spielfeld.

Tastatur am Rechner: Pfeiltasten, `J` für Sprung, Leertaste für Feuer.

Bei Luftschlag und Teleport tippst du das Ziel auf der Karte an oder verschiebst das Fadenkreuz mit den Pfeilen.

## Die Würmer

Jeder Wurm ist ein eigener Charakter. Er hat einen Namen, eine Persönlichkeit (*mutig*, *ängstlich*, *frech*, *verträumt* oder *grummelig*), eine eigene Hautfarbe, Augenfarbe, Stimmhöhe und ein Erkennungszeichen: Kappe, Mütze, Schleife, Zylinder, Krone, Blume, Stirnband, Brille, Partyhut, Helm, Sprössling, Locke oder Schnurrbart. Innerhalb eines Teams trägt jeder Wurm etwas anderes. Der Schal zeigt die Teamfarbe.

**Die Würmer bleiben dir.** Das Spiel merkt sich die Würmer jedes Spielers unter seinem Namen. Wer beim nächsten Mal wieder als „Lena“ spielt, bekommt dieselben Würmer zurück, mit ihrer Bilanz aus Spielen, Siegen und besiegten Gegnern. Die Übergabe-Seite und das Handy zeigen den Wurm, der dran ist, mit Bild und Bilanz. Nach dem Spiel wird der „Held des Spiels“ gekürt.

**Gefühle und Sprüche:** Die Würmer reden in Sprechblasen und sprechen sie in „Wurmisch“: Ein kleiner Sprach-Synthesizer im Spiel zerlegt den Spruch in deutsche Laute und spricht ihn mit der Stimmhöhe des Wurms, schnell und piepsig, aber mit erkennbaren Wörtern. Das Sprechtempo stellst du im Startmenü mit dem Regler *Sprechtempo der Würmer* ein (0,8× bis 2,2×, voreingestellt 1,9×), *Probe* spielt einen Satz zum Anhören. Was sie sagen, hängt von ihrer Persönlichkeit ab. Sie bekommen Angst, wenn jemand auf sie zielt oder eine Granate neben ihnen liegt: Augen weit auf, Zittern, Schweißtropfen und ein Schrei. Sie jammern bei Treffern, freuen sich über Kisten und trauern um gefallene Teamkameraden. Wenig Leben macht sie sichtbar besorgt. Wo ein Wurm fällt, bleibt ein Grabstein mit seinem Namen.

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
- **Kisten** bringt ab und zu ein kleines Propellerflugzeug mit Wurm-Pilot. Es fliegt über die Landschaft und wirft die Kiste an einem Fallschirm ab. Wie oft, stellst du im Startmenü unter *Kisten* ein: *Aus*, *Selten*, *Normal* (etwa jeder vierte Zug, nie zwei Züge hintereinander, höchstens zwei Kisten gleichzeitig) oder *Oft*.
- **Den Kisten sieht man den Inhalt an:** Erste Hilfe ist ein weißer Koffer mit rotem Kreuz. Sprengstoff (Clusterbombe, Dynamit, Mine, Sprengschaf, Kamikaze, Luftschlag) kommt in einer Holzkiste, Waffen (Schrotflinte, Schläger) in einer olivgrünen Munitionskiste, Werkzeug (Ninja-Seil, Teleport) in einem blauen Werkzeugkoffer. Vorne auf jeder Kiste ist ein Bild des Inhalts.
- **Minen** liegen von Anfang an auf der Karte und zünden, wenn ein Wurm zu nah kommt.
- **Ölfässer** explodieren bei Treffern und zünden benachbarte Fässer.

## Ablauf

Zu Beginn wählst du 2, 3 oder 4 Spieler, für jeden Spieler *Mensch* oder *Computer*, und 2, 3 oder 4 Würmer pro Team.

**Teams:** Ab drei Spielern kannst du unter *Spielart* statt *Jeder gegen jeden* auch *Teams* wählen und jeden Spieler mit dem Knopf A oder B einem Team zuordnen, zum Beispiel 2 gegen 2 oder 2 gegen 1. Menschen und Computer können gemischt in einem Team spielen. Die Teams sind abwechselnd dran, innerhalb eines Teams wechseln sich die Spieler ab. Gewonnen hat das Team, das als letztes noch Würmer hat. Treffer an Verbündeten sind möglich, zählen aber nicht für die Bilanz, und der Computer vermeidet sie.

Jedes Team merkt sich seine zuletzt gewählte Waffe. Die Teams sind abwechselnd dran, pro Zug gibt es 30 Sekunden. Im Startmenü lässt sich die Zeit pro Zug auf 15, 20, 30, 45, 60 oder 90 Sekunden einstellen. Nach dem Schuss bleibt kurz Zeit zum Rückzug. Danach erscheint die Übergabe an das nächste Team. Die Übergabe entfällt, wenn der Computer dran ist oder nur noch ein Mensch mitspielt. Würmer, die ins Wasser fallen, scheiden aus.

**Sudden Death:** Nach sechs Runden steigt das Wasser (beim Vulkan die Lava) zu Beginn jedes Zugs ein Stück. Tief liegende Würmer müssen nach oben, sonst ertrinken sie.

## Computer-Gegner

Der Computer spielt Bazooka, Granate und Schrotflinte. Er rechnet vor dem Schuss viele Winkel und Stärken mit derselben Physik durch, die auch das Spiel nutzt, und berücksichtigt dabei Wind, Abpraller und Ölfässer. Treffer am eigenen Team vermeidet er. Damit er nicht perfekt trifft, streut er Winkel und Kraft ein wenig. Findet er kein lohnendes Ziel, läuft er auf den nächsten Gegner zu und sucht erneut.

## Aufbau

Alles steckt in `index.html`: Stil, Markup und Spiellogik (Canvas). Die Spielfeldgröße, die Waffentabelle (`WEAPONS`), die Teamfarben (`COL`) und die Sudden-Death-Werte (`SD_ROUNDS`, `SD_RISE`) stehen am Anfang des Skripts. Die Landschaften stehen in `THEMES`, das Spiel mit mehreren Handys im Abschnitt `several phones`. Der Computer-Gegner steckt im Abschnitt `computer player`, die Geräusche werden im Abschnitt `sound` mit der Web Audio API erzeugt, ohne Audiodateien.
