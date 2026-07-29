# IKI1UC · System Runtime

Dieses Projekt zeigt die vollständige iki1uc‑Pipeline in einer einzigen HTML‑Runtime:

**ID + Pipeline + PQ + RESPO + NC + TMP + WHIRL**

Die `index.html` dient als zentrale Ansicht und zeigt alle System‑Komponenten live an.

---

## 🔹 System-ID (ID)

Die System‑ID ist ein einzelnes Objekt mit drei Modi:

- **KOOP** – Kooperation, Stabilisierung  
- **NEUTRAL** – Mitte, Ausgleich  
- **POOK** – Gegenachse, Drift  

Die ID wird im gesamten System verwendet:

- PQ‑Tasks  
- RESPO‑Flow  
- NC‑Links  
- TMP‑Achsen  
- WHIRL‑Core

Die ID ist vollständig in `index.html` eingebettet.

---

## 🔹 WHIRL

WHIRL erzeugt die Grundwerte des Systems:

- **core** – Kern  
- **S1 / S2 / S3** – Achsen  
- **S4** – Drift  
- **seq** – Sequenzzeit  

WHIRL ist die Basis für PQ, RESPO, NC und TMP.

---

## 🔹 TMP (Achsen)

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

## 🔹 index.html

Die Runtime zeigt:

- **ID‑Modus**  
- **WHIRL‑Output**  
- **PQ_HISTORY**  
- **RESPO_LOG**  
- **NC_LOG**  
- **TMP‑Achsen**

Die ID kann per Button geändert werden:

- KOOP  
- NEUTRAL  
- POOK

Die Pipeline wird durch Eingabe + ENTER ausgeführt.

---

## 🔹 Zweck

Dieses Projekt dient als:

- Visualisierung der iki1uc‑Pipeline  
- Debug‑Ansicht für WHIRL‑Daten  
- Testumgebung für PQ / RESPO / NC  
- Demonstration der System‑ID  
- Grundlage für Visualizer, NC.sync und 6D.tech

---

## 🔹 Dateien

- `index.html` – komplette Runtime  
- `ID.html` – System‑ID Ansicht  
- (optional) `Visualizer.html`  
- (optional) `NC.sync.html`  
- (optional) `6D.tech.html`

---

## 🔹 Lizenz

Freie Nutzung innerhalb iki1uc‑Systemen.

