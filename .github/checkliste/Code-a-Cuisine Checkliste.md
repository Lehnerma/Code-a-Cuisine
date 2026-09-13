# Checkliste: Code-a-Cuisine 

Du entwickelst eine smarte Webanwendung mit KI-Automatisierungen, die aus deinen vorhandenen Zutaten automatisch passende Rezepte generiert. Deine App hilft Hobbyköchen und WG-Bewohnern dabei, Lebensmittelverschwendung zu reduzieren und gleichzeitig abwechslungsreich sowie gesund zu kochen.   
Alle generierten Rezeptideen sind über die Bibliothek für andere Anwendbar einsehbar.

1. ## **Allgemeine Anforderungen**

- [ ] GitHub Repository: Link zum Git Repo ist beigefügt mit [README.md](http://README.md)  
- [ ] Semantisches HTML: Korrekte HTML5-Struktur ohne Div-Suppe  
- [ ] Font-Size Standards: Mindestens 16px, Kleingedrucktes nicht unter 14px  
- [ ] Verwende Angular zur Umsetzung des Frontends  
- [ ] JSDoc Dokumentation: Alle Funktionen sind dokumentiert

- [ ] ## Alle generierte Rezepte werden in Firebase gespeichert

2. ## **N8N-spezifische Anforderungen**

- [ ] N8N Projekt ist in GIT eingecheckt  
- [ ] Aussagekräftige Node-Namen und Beschreibungstexte für bessere Wartbarkeit  
- [ ]  Fehlerbehandlung und Logging in n8n-Workflows integrieren, z.B. Error-Trigger und Email-Benachrichtigung bei Fehlern  
- [ ]  Quota- und Rate-Limiting: n8n-Workflows so gestalten, dass sie Frontend-Validierung ergänzen und Kostenairbags sicherstellen  
- [ ]  Datenvalidierung: Eingabedaten aus Angular im n8n-Workflow nochmals validieren, um Fehlfunktionen zu vermeiden  
- [ ]  Effiziente Datenübergabe: JSON-Strukturen zwischen Angular und n8n klar definieren, z.B. für Zutatenlisten, Nutzer-Parameter etc.

3. ## **User Experience \-Responsive Design** 

- [ ] Die Anwendung funktioniert auf Desktop, Tablet und Smartphone  
- [ ] Touch-Bedienung ist optimiert  
- [ ] Recipe Charts sind auch auf kleinen Bildschirmen gut erkennbar  
- [ ] Die Ladezeit bei der Rezeptgenerierung wird ansprechend überbrückt  
      

4. ### **Git-Workflow für dein Projekt**

- [ ] Nutze GitHub von Anfang an. Denk dran: Dein GitHub-Profil ist deine Visitenkarte für Arbeitgeber – nutze diese Chance\!  
- [ ] Committe nach jeder Coding-Session  
- [ ] Verwende klare, aussagekräftige Commit-Messages  
- [ ] Verwende *.gitignor*e verwenden, um unnötige Dateien auszuschließen  
- [ ] Halte dein Repository aktuell und gepflegt

5. ## **Funktionalitäten \- User Stories (WIP)**

   ## **Rezeptebibliothek**

## **User Story 1: Zutaten-Eingabe**

**Als User möchte ich meine vorhandenen Zutaten eingeben können damit das System passende Rezepte vorschlagen kann.**

- [ ] Ich kann Zutaten über ein Suchfeld mit Autocomplete-Funktion eingeben (optional)  
- [ ] Ich kann die Menge jeder Zutat angeben (Gramm, Stück, Liter, etc.)  
- [ ] Ich kann Zutaten wieder entfernen  
- [ ] Das System zeigt mir eine Übersicht aller eingegebenen Zutaten an  
- [ ] Mindestens 1 Zutaten muss eingegeben werden

## **User Story 2: Portionsangabe**

**Als User möchte ich die gewünschte Anzahl an Portionen angeben damit die Rezepte entsprechend skaliert werden.**

- [ ] Ich kann die Portionszahl festlegen (1-12 Personen)  
- [ ] Das System passt alle Mengenangaben automatisch an die Portionszahl an  
- [ ] Die Standardeinstellung liegt bei 2 Portionen

## **User Story 3: Zeitangabe**

**Als User möchte ich den verfügbaren Zeitrahmen und gewünschte Komplexität angeben damit ich nur umsetzbare Rezepte erhalte.**

- [ ] Ich kann zwischen Zeitkategorien wählen: "Schnell (bis 20 Min)", "Mittel (20-45 Min)", "Aufwendig (45+ Min)"

## **User Story 4: Kochstil-Auswahl**

**Als User möchte ich einen bevorzugten Kochstil wählen damit die Rezepte meinem Geschmack entsprechen.**

- [ ] Ich kann aus folgenden Optionen wählen: Deutsche Küche, Italienische Küche, Japanische Küche, Indische Küche, Gourmet/Fine Dining  
- [ ] Ich kann "Fusion" wählen für internationale Mischung  
- [ ] Das System berücksichtigt typische Gewürze und Zubereitungsarten des gewählten Stils

## **User Story 5: Diät-Einstellungen**

**Als User möchte ich meine Ernährungsweise angeben damit ich nur passende Rezepte erhalte.**

- [ ] Ich kann zwischen folgenden Optionen wählen: Vegetarisch, Vegan, Keto, Keine Einschränkung  
- [ ] Das System schließt unpassende Zutaten und Rezepte automatisch aus  
      

## **User Story 6: Anzahl Kochhelfer**

**Als User möchte ich angeben, wie viele Personen beim Kochen helfen damit ich optimierte Arbeitsaufteilung erhalte.**

- [ ] Ich kann die Anzahl der Kochhelfer angeben (1-3 Personen)  
- [ ] Das System teilt Aufgaben entsprechend auf  
- [ ] Bei mehreren Helfern werden parallele Arbeitsschritte vorgeschlagen

## **User Story 7: Rezeptvorschläge erhalten**

**Als User möchte ich drei passende Rezeptvorschläge erhalten damit ich auswählen kann, was ich kochen möchte.**

- [ ] Das System generiert genau 3 unterschiedliche Rezeptvorschläge  
- [ ] Jeder Vorschlag nutzt mindestens 70% meiner angegebenen Zutaten  
- [ ] Die Vorschläge unterscheiden sich in Zubereitungsart oder Geschmacksrichtung  
- [ ] Fehlende Zutaten werden klar gekennzeichnet und sind maximal 3 zusätzliche Basis-Zutaten

## **User Story 8: Optimierte Zubereitungsanleitung**

**Als User möchte ich eine chronologische, workflow-optimierte Anleitung erhalten damit ich effizient kochen kann.**

- [ ] Die Schritte sind chronologisch und logisch aufgebaut  
- [ ] Parallele Arbeitsschritte werden klar gekennzeichnet  
- [ ] Wartezeiten (z.B Zeit im Ofen) werden genutzt für andere Vorbereitungen  
- [ ] Die Anleitung ist auch für Kochanfänger verständlich

## **User Story 9: Arbeitsaufteilung bei mehreren Helfern**

**Als User mit Kochhelfern möchte ich eine klare Arbeitsaufteilung erhalten damit alle Beteiligten wissen, was sie wann tun müssen.**

- [ ] Jede Person hat seinen eigene ToDo Liste mit den Steps zugeordnet  
- [ ] Aufgaben sind klar nach Personen getrennt

## **User Story 10: Nährwertanalyse**

**Als User möchte ich detaillierte Nährwertinformationen erhalten damit ich bewusste Ernährungsentscheidungen treffen kann.**

- [ ] Kalorien pro Portion werden angezeigt  
- [ ] Makronährstoffe (Protein, Kohlenhydrate, Fett) in Gramm und Prozent  
- [ ] Nährwerte sind pro Portion und für Gesamtrezept verfügbar  
      

## **User Story 11: IP-basierte Quota-Verwaltung**

**Als Systemadministrator möchte ich ein IP-basiertes Quota-System implementieren, damit ich die Nutzung der Anwendung kontrollieren, Kosten begrenzen und gleichzeitig einer maximalen Anzahl von Nutzern Zugang gewähren kann.**

**Als Nutzer möchte ich transparent über meine verfügbaren Nutzungen informiert werden, damit ich meine Anfragen optimal planen kann.**

- [ ] Quota wird pro IP-Adresse und Datum getrackt (3 Rezepte pro IP pro Tag)  
- [ ] System-weite Quota bleibt bei 12 Rezepten pro Tag bestehen.  
- [ ] IP-Adresse wird bei jeder Anfrage erfasst und validiert  
- [ ] Neben einer Frontend Validierung wird auch ein Throttling Rate Limitung über n8n sichergestellt, um einen Kostenairbag zu haben  
- [ ] Bei geteilten IP-Adressen (z.B. Büronetzwerk) teilen sich alle Nutzer die 3 Rezepte  
- [ ] IPv4 und IPv6 Adressen werden unterstützt  
- [ ] Nutzer bekommt eine aussagekräftige Fehlermeldung bei Überschreitung der Quota

---

## **Rezeptebibliothek**

### **User Story 12: Rezept-Bibliothek anzeigen**

**Als User möchte ich alle jemals generierten Rezepte in einer Bibliothek einsehen damit ich Inspiration finden und erfolgreiche Rezepte wiederholen kann.**

- [ ] Alle generierten Rezepte werden in einer übersichtlichen Bibliothek angezeigt  
- [ ] Grundinformationen sind sichtbar: Titel, Kochzeit, Kochstil  
- [ ] Klick auf ein Rezept öffnet die vollständige Detailansicht  
- [ ] Bibliothek ist ohne Account zugänglich  
- [ ] Paginierung bei mehr als 20 Rezepten pro Seite

### **User Story 13: Kategorisierung der Rezept-Bibliothek**

**Als User möchte ich Rezepte nach Kategorien durchsuchen damit ich schnell passende Rezepte finde.**

- [ ] Kategorien verfügbar: Kochstil (Deutsch, Italienisch, Japanisch, Indisch, Gourmet)

### **User Story 14: Rezept-Details aus Bibliothek**

**Als User möchte ich ein Rezept aus der Bibliothek in voller Detailansicht betrachten damit ich es nachkochen kann.**

- [ ] Vollständige Rezeptansicht wie bei der ursprünglichen Generierung

---

## **Weitere Seiten**

- [ ] **Impressum** implementiert

---

## **Finale Qualitätssicherung**

- [ ] Cross-Browser-Testing abgeschlossen  
- [ ] Responsive Design getestet  
- [ ] Code-Review durchgeführt  
- [ ] GitHub Repository mit README.md vorhanden  
    


      