# Trello Cost Tracker Power-Up

Ein Trello Power-Up zum Erfassen von Kosten auf Karten und Zusammenfassen der Kosten pro Liste.

## Funktionen

✅ **Kosten auf Karten erfassen** - Fügen Sie einfach Kosten zu jeder Karte hinzu
✅ **Badge-Anzeige** - Kosten werden als Badge direkt auf der Karte angezeigt
✅ **Listen-Zusammenfassung** - Sehen Sie die Gesamtkosten aller Karten in einer Liste
✅ **Mehrere Währungen** - Unterstützung für €, $, £, ¥
✅ **Einfache Bedienung** - Intuitive Benutzeroberfläche

## Installation

### 1. Power-Up hosten

Die Dateien müssen auf einem öffentlich zugänglichen HTTPS-Server gehostet werden. Optionen:

- **GitHub Pages** (kostenlos, empfohlen für Anfänger)
- **Netlify** (kostenlos)
- **Vercel** (kostenlos)
- Eigener Server

#### GitHub Pages Anleitung:

1. Erstellen Sie ein neues GitHub Repository
2. Laden Sie alle Dateien hoch
3. Gehen Sie zu Settings → Pages
4. Aktivieren Sie GitHub Pages für den main/master Branch
5. Ihre URL wird sein: `https://username.github.io/repository-name/`

### 2. Power-Up in Trello registrieren

1. Gehen Sie zu: https://trello.com/power-ups/admin
2. Klicken Sie auf "Create New Power-Up"
3. Füllen Sie die erforderlichen Felder aus:
   - **Name**: Cost Tracker
   - **Iframe Connector URL**: `https://ihre-domain.com/index.html`
4. Wählen Sie ein Workspace aus
5. Speichern Sie das Power-Up

### 3. Power-Up zu einem Board hinzufügen

1. Öffnen Sie ein Trello Board
2. Klicken Sie auf "Power-Ups" im Board-Menü
3. Suchen Sie Ihr "Cost Tracker" Power-Up
4. Klicken Sie auf "Add" (Hinzufügen)

## Verwendung

### Kosten zu einer Karte hinzufügen

1. Öffnen Sie eine Karte
2. Klicken Sie auf den "Kosten" Button
3. Geben Sie den Betrag ein (z.B. "150.50 €" oder "99.99")
4. Klicken Sie auf "Speichern"

Die Kosten werden nun als Badge auf der Karte angezeigt.

### Listen-Zusammenfassung anzeigen

1. Klicken Sie auf das Menü einer Liste (drei Punkte)
2. Wählen Sie "Kosten zusammenfassen"
3. Sie sehen:
   - Anzahl der Karten mit Kosten
   - Gesamtkosten der Liste
   - Auflistung aller Karten mit ihren Kosten

### Kosten bearbeiten oder entfernen

1. Öffnen Sie die Karte
2. Klicken Sie auf "Kosten"
3. Ändern Sie den Wert oder klicken Sie auf "Entfernen"

## Dateistruktur

```
cost-tracker-powerup/
├── index.html              # Haupt-Connector-Datei
├── manifest.json           # Power-Up Metadaten
├── js/
│   └── connector.js        # Hauptlogik des Power-Ups
├── views/
│   ├── cost-editor.html    # Popup zum Bearbeiten von Kosten
│   ├── list-summary.html   # Listen-Zusammenfassung
│   └── settings.html       # Einstellungen
└── images/
    └── icon.png            # Power-Up Icon (erforderlich)
```

## Icon hinzufügen

Sie benötigen noch ein Icon für das Power-Up:

1. Erstellen Sie ein 128x128px PNG-Bild
2. Speichern Sie es als `images/icon.png`
3. Alternativ verwenden Sie ein kostenloses Icon von:
   - https://icons8.com
   - https://flaticon.com
   - https://iconmonstr.com

## Entwicklung und Testing

### Lokales Testing mit ngrok

1. Installieren Sie ngrok: https://ngrok.com/
2. Starten Sie einen lokalen Server (z.B. mit Python):
   ```bash
   python -m http.server 8000
   ```
3. Erstellen Sie einen ngrok-Tunnel:
   ```bash
   ngrok http 8000
   ```
4. Verwenden Sie die ngrok HTTPS-URL als Iframe Connector URL

## Anpassungen

### Währung ändern

Ändern Sie in `js/connector.js` die Konstante:
```javascript
const DEFAULT_CURRENCY = '€'; // Ändern Sie zu '$', '£', oder '¥'
```

### Styling anpassen

Bearbeiten Sie die `<style>` Bereiche in den HTML-Dateien in `views/`.

## Troubleshooting

**Power-Up wird nicht geladen**
- Überprüfen Sie, ob alle Dateien über HTTPS erreichbar sind
- Öffnen Sie die Browser-Console (F12) für Fehlermeldungen

**Kosten werden nicht gespeichert**
- Stellen Sie sicher, dass das Power-Up die Berechtigung zum Speichern von Daten hat

**Icon wird nicht angezeigt**
- Überprüfen Sie, ob `images/icon.png` existiert und öffentlich zugänglich ist

## Support

Bei Fragen oder Problemen:
1. Überprüfen Sie die Trello Power-Up Dokumentation: https://developer.atlassian.com/cloud/trello/power-ups/
2. Schauen Sie sich die Browser-Console für Fehler an
3. Testen Sie die URLs in einem neuen Browser-Tab

## Lizenz

Dieses Power-Up ist für den persönlichen und kommerziellen Gebrauch frei verfügbar.
