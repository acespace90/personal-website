---
title: "Accessibilità e sottolineatura sui link: best practices"
date: 2022-05-31T17:29:32.090Z
tag:
  - Accessibilità
abstract: In Tangible parliamo continuamente di accessibilità e non ci
  stancheremo mai di farlo. È un tema per noi importante non solo per una
  questione di inclusività e usabilità dei prodotti e servizi che progettiamo,
  ma anche perché rientra all’interno dei criteri d’impatto che monitoriamo.
---
In questo post voglio approfondire il tema sulle **sottolineature dei collegamenti ipertestuali** (link).

**I browser sottolineano i link per impostazione predefinita.**

Ciò nonostante spesso riteniamo che le sottolineature dei link abbiano una resa estetica non ottimale e pertanto tendiamo a rimuoverle tramite CSS, ma la maggior parte delle volte questa non è una buona idea.

Quindi, quali sono le best practices?

<h2 aria-label="too long didn't read">TL;DR</h2>

Per un sito web accessibile e usabile è buona regola **non rimuovere la sottolineatura sui collegamenti ipertestuali,** iin particolare all’interno dei paragrafi di testo, all’interno di una pagina.

## Ok, vi dico di più

Un esempio concreto? Gli utenti con **daltonismo** o **ipovedenti** potrebbero avere difficoltà a distinguere i collegamenti dal testo normale quando manca la sottolineatura.

**Rimuovendo la sottolineatura** e utilizzando come unico parametro distintivo il colore **si rischia di commettere un errore** di progettazione, privando l’utente dei riferimenti visivi utili al riconoscimento immediato dei collegamenti ipertestuali.\
A tal proposito **[le linee guida WCAG](https://www.w3.org/TR/WCAG20-TECHS/F73.html)** suggeriscono di non fare affidamento solo sul colore per distinguere i link e consigliano inoltre di esplicitare le sottolineature.

## Eccezioni

Tuttavia, ci sono delle **eccezioni** per cui le sottolineature sui link potrebbero essere omesse.\
Nonostante gli utenti siano abituati a vedere i link sottolineati nei contenuti di una pagina web, lo sono anche a vedere i **tab** e le **aree di navigazione** senza sottolineature.

Ci sono infatti due casi principali in cui è possibile eliminarle: **menu di navigazione** e altri **elenchi di collegamenti,** a patto che il design della pagina renda evidente la funzione dell’area.

![Componente tabs HTML](/assets/img/uploads/tablist.png)

![Menù di navigazione](/assets/img/uploads/nn-group-navigation.png)

## L’erba del vicino è veramente più verde della nostra?

Molti dei siti web dei brand più noti non utilizzano le sottolineature per i link. Le ragioni però possono essere molteplici.\
Sicuramente la progettazione dei loro siti è il risultato di precisi ragionamenti, tuttavia la loro notorietà gli permette di sorvolare o alleggerire determinati accorgimenti tecnici.

Questo non deve farci pensare che l’accessibilità sia un vezzo accessorio da cui farsi guidare a piacimento, bensì una summa di regole inclusive fondamentali per permettere a chiunque di accedere alle opportunità offerte dalla rete.

## Opzioni di stile

Come già detto, per impostazione predefinita i **collegamenti ipertestuali sono sottolineati dai browser.** Questa resta certamente l’**opzione consigliata** oltre che a costo zero.\
Ma se proprio abbiamo la necessità di disabilitare le sottolineature, dovremmo considerare di aggiungere un altro elemento di formattazione per distinguere i collegamenti ipertestuali dal resto del testo.

**Evidenziazione**Da alcuni studi è emerso che **il testo evidenziato è un’ottima alternativa**.\
Questa può essere una tecnica efficace, a condizione che il **contrasto** tra il testo del collegamento e il colore di sfondo sia **sufficientemente elevato**.

**Bordi**I **bordi inferiori** offrono anche più scelta nel colore (non è necessario che corrisponda al colore del testo) e nello stile del bordo stesso (punteggiato, tratteggiato, doppio, più spesso, più sottile).

*N.B: I bordi tratteggiati possono confondersi con l’elemento HTML [<abbr> che rappresenta un’abbreviazione o un acronimo](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr).*

**Icone**L’utilizzo delle icone può rappresentare un altro valido metodo per rappresentare un link quando rimuoviamo la sottolineatura. L’icona in questo caso però deve fungere da **elemento di accompagnamento** del testo e **non essere utilizzata da sola** per rappresentare un collegamento.

![Link accompagnato da un'icona](/assets/img/uploads/link-with-chevron.png)

## Conclusioni

Secondo le linee guida sull’usabilità in merito all’aspetto dei link, la navigazione in pagina e la trovabilità dei collegamenti ipertestuali fondamentali è supportata maggiormente se seguiamo le best practices di progettazione.

In definitiva, il consiglio è: **utilizzate le sottolineature per far risaltare i collegamenti ipertestuali.**\
Altre opzioni di stile possono funzionare, ma non sono universali e a volte richiedono di essere apprese dagli utenti.\
Il nostro lavoro, come buoni designer, è di ridurre il carico cognitivo e non aumentarlo.

## Risorse

Ecco le fonti preziose da cui ho attinto per la scrittura di questo blog post:

* [Links and Hypertext – WebAIM](https://webaim.org/techniques/hypertext/link_text)
* [On Link Underlines – Adrian Roselli](https://adrianroselli.com/2016/06/on-link-underlines.html)
* [Keep the Underline – WebAxe.org](https://www.webaxe.org/keep-the-underline-text-links/)
* [Guidelines for Visualizing Links – Nielsen Norman Group](https://www.nngroup.com/articles/guidelines-for-visualizing-links/)
* F73: [Failure of Success Criterion 1.4.1](https://www.w3.org/TR/WCAG20-TECHS/F73.html) due to creating links that are not visually evident without color vision (W3C WCAG 2.0)