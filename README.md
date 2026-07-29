# IKI1UC · EVO Runtime System

Dieses Repository enthält die aktuelle **EVO‑Runtime** des IKI1UC‑Systems.  
EVO ist die Weiterentwicklung des ursprünglichen ROM‑Moduls und verbindet:

- **ID-System**
- **WHIRL-Core**
- **Pipeline**
- **PQ (Parallel Queue)**
- **RESPO (Response Flow)**
- **NC (Node Connector)**
- **TMP (Achsen-Speicher)**
- **index.html Runtime-Viewer**

Damit bildet dieses Repository die komplette axiologische Ableitung des Systems.

---

## 🔹 EVO — Axiomatische Hardware- und Speicher-Ableitung

EVO ist ein abgeleitetes Hardware‑ und Speicher‑Modul.  
Es erzeugt keine eigene Leistung, sondern übernimmt Power aus drei Axiomen:

1. **RAM**  
2. **CPU**  
3. **GPU**

Diese drei Axiome liefern die Basisenergie, die EVO in strukturierte Achsen, Drift und Sequenzen überführt.

---

## 🔹 ID-System

Das ID‑System ist ein einzelnes Objekt mit drei Modi:

- **KOOP** – Kooperation, Stabilisierung  
- **NEUTRAL** – Mitte, Ausgleich  
- **POOK** – Gegenachse, Drift  

Die ID wird in allen Modulen verwendet:

- PQ‑Tasks  
- RESPO‑Flows  
- NC‑Links  
- TMP‑Achsen  
- WHIRL‑Core  
- Pipeline‑Output

Die Datei **ID.html** zeigt die ID‑Modi direkt im Browser.

---

## 🔹 WHIRL-Core

WHIRL erzeugt die Grundwerte des Systems:

- **core** – Kern  
- **S1 / S2 / S3** – Achsen  
- **S4** – Drift  
- **seq** – Sequenzzeit  

WHIRL ist die Basis für alle weiteren Module.

---

## 🔹 TMP (Achsen-Speicher)

TMP speichert die aktuellen Achsen:

- **B**  
- **H**  
- **T**  
- **seq**

TMP wird bei jedem Pipeline‑Durchlauf aktualisiert.

---

## 🔹 PQ (Parallel Queue)

PQ erzeugt Tasks aus WHIRL:

- ID‑System  
- Achsen  
- Drift  
- Core  
- Sequenz

Alle PQ‑Tasks werden in `PQ_HISTORY` gespeichert.

---

## 🔹 RESPO (Response Flow)

RESPO erzeugt eine Antwortstruktur:

- ID  
- Core  
- Drift  
- Sequenz

Alle RESPO‑Flows werden in `RESPO_LOG` gespeichert.

---

## 🔹 NC (Node Connector)

NC erzeugt Achsen‑Links:

- ID  
- Achsen  
- Sequenz

Alle NC‑Links werden in `NC_LOG` gespeichert.

---

## 🔹 Pipeline

Die Pipeline verbindet alle Module:

1. WHIRL erzeugen  
2. TMP setzen  
3. PQ ausführen  
4. RESPO erzeugen  
5. NC erzeugen  
6. Ausgabe zurückgeben  

Die Pipeline wird durch ENTER im `index.html` ausgelöst.

---

## 🔹 index.html — System Runtime Viewer

Die Runtime zeigt:

- **ID-Modus**
- **WHIRL-Core**
- **PQ_HISTORY**
- **RESPO_LOG**
- **NC_LOG**
- **TMP-Achsen**

Die ID kann per Button geändert werden:

- KOOP  
- NEUTRAL  
- POOK  

Die Pipeline wird durch Eingabe + ENTER ausgeführt.

---

## 🔹 Zweck

Dieses Projekt dient als:

- Visualisierung der kompletten iki1uc‑Pipeline  
- Debug‑Ansicht für WHIRL‑Daten  
- Testumgebung für PQ / RESPO / NC  
- Demonstration der System‑ID  
- Grundlage für Visualizer, NC.sync und 6D.tech

---

## 🔹 Dateien

- `index.html` – komplette Runtime  
- `ID.html` – System‑ID Ansicht  
- `README.md` – Dokumentation  
- (optional) `Visualizer.html`  
- (optional) `NC.sync.html`  
- (optional) `6D.tech.html`

---

## 🔹 Lizenz

Freie Nutzung innerhalb iki1uc‑Systemen.
1
