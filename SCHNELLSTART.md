# Schnellstart-Anleitung: Trello Cost Tracker Power-Up

## ⚡ In 5 Minuten einsatzbereit

### Schritt 1: Dateien auf GitHub Pages hochladen (kostenlos & einfach)

1. **GitHub Account erstellen** (falls noch nicht vorhanden)
   - Gehe zu https://github.com
   - Klicke auf "Sign up"

2. **Neues Repository erstellen**
   - Klicke auf das "+" oben rechts → "New repository"
   - Name: `trello-cost-tracker`
   - Wähle "Public"
   - Klicke "Create repository"

3. **Dateien hochladen**
   - Klicke auf "uploading an existing file"
   - Ziehe ALLE Dateien und Ordner aus dem `cost-tracker-powerup` Verzeichnis in das Fenster
   - Klicke "Commit changes"

4. **GitHub Pages aktivieren**
   - Gehe zu "Settings" (im Repository)
   - Klicke links auf "Pages"
   - Bei "Source" wähle "Deploy from a branch"
   - Bei "Branch" wähle "main" und "/root"
   - Klicke "Save"
   - Warte 1-2 Minuten
   - Deine URL: `https://DEIN-USERNAME.github.io/trello-cost-tracker/`

### Schritt 2: Power-Up in Trello registrieren

1. **Gehe zu Trello Power-Ups Admin**
   - URL: https://trello.com/power-ups/admin
   - Klicke "Create New Power-Up"

2. **Fülle das Formular aus**
   ```
   Name: Cost Tracker
   
   Iframe Connector URL: 
   https://DEIN-USERNAME.github.io/trello-cost-tracker/index.html
   
   Description: Kosten auf Karten erfassen und pro Liste zusammenfassen
   
   Support Contact: deine@email.com
   
   Author: Dein Name
   ```

3. **Workspace auswählen**
   - Wähle dein Trello Workspace
   - Klicke "Save"

### Schritt 3: Power-Up aktivieren

1. **Öffne ein Trello Board**
2. **Klicke auf "Power-Ups"** (rechts im Menü)
3. **Suche nach "Cost Tracker"**
4. **Klicke "Add"**

### 🎉 Fertig! Jetzt kannst du:

✅ Auf Karten klicken → "Kosten" Button → Betrag eingeben
✅ In Listen auf "..." → "Kosten zusammenfassen" → Gesamtübersicht sehen

---

## 🔧 Icon anpassen (Optional)

Das mitgelieferte SVG-Icon ist ein einfaches Euro-Symbol. Für ein professionelleres Icon:

1. **Lade ein Icon herunter** (128x128 px PNG):
   - https://icons8.com/icons/set/money (kostenlos)
   - https://www.flaticon.com/search?word=cost (kostenlos mit Namensnennung)

2. **Ersetze `images/icon.svg`** durch `images/icon.png`

3. **Aktualisiere `manifest.json`**:
   ```json
   "icon": {
     "url": "./images/icon.png"
   }
   ```

4. **Lade die neue icon.png zu GitHub hoch**

---

## 📝 Verwendungsbeispiele

### Kosten eingeben
```
150.50 €
99.99 $
1234.56 £
50
```

Alle Formate werden erkannt!

### Typische Anwendungsfälle

- 📊 **Projektbudgets verwalten**
- 🛒 **Shopping-Listen mit Preisen**
- 💰 **Ausgaben tracken**
- 📈 **Sprint-Kosten kalkulieren**
- 🏗️ **Baukosten erfassen**

---

## ⚠️ Wichtige Hinweise

1. **HTTPS erforderlich**: Trello Power-Ups benötigen HTTPS
2. **Öffentlich zugänglich**: Die Dateien müssen öffentlich erreichbar sein
3. **Icon erforderlich**: Ohne Icon in `images/` funktioniert das Power-Up nicht richtig

---

## 🆘 Häufige Probleme

**Problem: Power-Up lädt nicht**
→ Überprüfe die URL in der Browser-Console
→ Stelle sicher, dass GitHub Pages aktiviert ist (kann 2-5 Min. dauern)

**Problem: Icon wird nicht angezeigt**
→ Stelle sicher, dass `images/icon.svg` oder `icon.png` existiert
→ Prüfe den Pfad in `manifest.json`

**Problem: "Access Denied" beim Speichern**
→ Stelle sicher, dass du das Power-Up zum Board hinzugefügt hast
→ Überprüfe die Capabilities in `manifest.json`

---

## 📚 Weiterführende Ressourcen

- Trello Power-Up Dokumentation: https://developer.atlassian.com/cloud/trello/
- GitHub Pages Guide: https://pages.github.com/
- Power-Up Beispiele: https://developer.atlassian.com/cloud/trello/power-ups/sample-power-ups/

**Viel Erfolg mit deinem Cost Tracker Power-Up! 🚀**
