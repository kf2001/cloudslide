

# 1
## Chelka

### Quali sono i compiti dei livelli di Presentazione, Logico e Dati?

Nell'ingegneria del software, il termine architettura multi-tier o N-Tier indica un'architettura software in cui le varie funzionalità del software sono logicamente separate ovvero suddivise su più strati o livelli software differenti in comunicazione tra loro (nel caso di applicazioni web questi strati sono la logica di presentazione, l'elaborazione dei processi e la gestione della persistenza dei dati).

Ciascuno strato è in comunicazione diretta con quelli adiacenti ovvero richiede ed offre servizi allo strato adiacente in maniera concettualmente simile a quanto accade con le architetture di rete a strati (in linguaggio strettamente informatico si dice che ciascuno strato è client-server per gli strati adiacenti, fatta eccezione per gli strati estremi che sono solo client o solo server).


# 2
## Adami

### Quali sono i compiti dei livelli di Presentazione, Logico e Dati?

Il livello di presentazione contiene l'interfaccia utente che interagisce con il mondo esterno. Questo è anche responsabile della fornitura dell'esperienza utente poiché questo è l'unico livello esposto per interazione con l'utente finale.
 
Business Logic Layer, come suggerisce il nome, contiene la logica di business per il software applicazione. 
Questo livello scollega UI / UX dai calcoli relativi al business e quindi
fornire una flessibilità per modificare la logica a seconda del business in continua evoluzione requisiti senza avere alcun effetto su altri strati.
 
Mentre Data Link Layer mantiene la responsabilità di interagire con l'archiviazione persistente come i database e l'elaborazione di dati vari che non sono specifici del dominio (ad es. non relativo all'attività)

# 3
# Mattei

### Che cosa si intende per tier?

Tier (strato) è un genere di architettura software e hardware che solitamente prevede la presenza di più strati (multi tier) per l’esecuzione di applicazioni web. L’architettura più usata è quella a tre strati (three tier), dedicati rispettivamente all’interfaccia utente, alla logica funzionale e alla gestione dei dati persistenti. Questo modello garantisce anche scalabilità, visto che ogni modulo può essere sostituito senza creare problemi agli altri.

Di seguito un’immagine che esplica un possibile esempio di architettura three-tier.

![C:\Users\lmatt\Desktop\oooooooooooooooooooooooooooooooooooooo.png](Aspose.Words.c33c77a2-965f-4e41-90a8-9321553b038e.001.png)

# 4
## Mosca

### Che cosa si intende per layer?

Il layer (livello o strato) è una funzione degli applicativi informatici che consente di lavorare su un elemento (raster o vettoriale) di un file senza interferire sugli altri. È utile per raggruppare gli elementi o dati che hanno tra loro una relazione logica o proprietà comuni.

Generalmente il foglio elettronico su cui si lavora è organizzato in più layer sovrapponibili, ai quali vengono assegnate delle proprietà (nome, colore) e delle modalità operative:

- Layer corrente o di lavoro, sul quale vengono disegnate, duplicate, modificate e trasformate le figure;
- Layer attivo, in cui le figure visualizzate sono soggette a duplicazione, trasformazione e modifica, ma non possono essere create;
- Layer visibile, in cui le figure sono visibili ma non sono modificabili;
- Layer invisibile, dove manca la visualizzazione e l’editazione delle figure presenti nel foglio elettronico.

# 5
## Simoncelli

### Quali sono i componenti di un&#39;architettura 3-tier per siti web?

Un'architettura 3-tier è composta da 3 livelli ognuno dei quali costituito da componenti ben definite:

- al livello 1 (presentation tier) troviamo il **client** , cioè il dispositivo che richiede la risorsa. Il client è dotato di un'interfaccia utente ed è incaricato della presentazione dei dati ricevuti.
- al ivello 2 (logical tier) troviamo **server di applicazion** i (o middleware) che ha il compito di fornire la risorsa ma facendo riferimento ad un altro server. L'introduzione di questo livello intermedio tra client e server permette un aumento delle prestazioni infatti esso accelera il completamento delle richieste del client, raggruppandole e riducendo il numero delle richieste di collegamento al database, e rendendo ogni collegamento il più efficiente possibile.
- al ivello 3 (data tier) troviamo **server di database** che fornisce al server dell'applicazione i dati di cui ha bisogno. ![](RackMultipart20210328-4-6qnfvq_html_7dd70bbe4ce320b8.gif)

# 6
## Ait Thami

### Che cosa si intende con “architettura SOA”?

SOA  (Service Oriented Architecture), o architettura orientata ai servizi, definisce un nuovo modello logico attraverso il quale sviluppare il software.
Tale modello realizzato dai Web Services, i quali si presentano come moduli software distribuiti come moduli software distribuiti che collaborano fornendo determinati servizi in maniera standard.

Questa tecnologia può essere usata per esporre sul Web (in modo sicuro e trasparente) la business logic localizzata all’interno di un sistema aziendale.

Attraverso i Web Services, le aziende possono:

    • incapsulare la logica applicativa e presentarla all’esterno come un insieme di servizi
    • cercare e sottoscriversi ad altri servizi
    • scambiare informazioni con l’enterprise layer.


# 7
 ## Parisi

### Che cos'è un servizio?

Un servizio é una singola operazione eseguibile da una Web Application.

Esso trasmette in output le informazioni richieste tramite il protocollo HTTP.

Possiamo vedere il servizio come una funzione di comuni linguaggi di programmazione:

nel momento in cui viene richiamata bisogna passarle un insieme di valori che andranno a formare gli argomenti, ed essa ci restuirá in output un risultato del tipo richiesto, o un errore, nel caso dovesse essere necessario.

Un insieme di servizi sotto lo stesso dominio vanno a formare una API, ovvero un'interfaccia utente che permette l'accesso a tutte le funzionalità della Web Application.

# 8
## Chyzhyk
## Spiegare il concetto di lousy-coupled riferito alle applicazioni SOA


_Loosely-coupled_, ovvero **debolmente accoppiato** , è un concetto che riferito alle applicazioni SAO (Service-oriented architecture), si intende un sistema in cui ciascuno dei suoi componenti ha, o fa uso di, poca o nessuna conoscenza delle definizioni di altri componenti separati.

Le **sottozone** includono l&#39;accoppiamento di _classi_, _interfacce_, _dati_ e _servizi_.

I componenti di tal sistema, possono essere sostituiti con _implementazioni alternative_ che forniscono gli stessi servizi, dato che tali compomenti sono meno vincolati alla stessa _piattaforma_, _lingua_ , _sistema operativo_ o _ambiente di compilazione_.

Se i sistemi vengono disaccoppiati nel tempo, è difficile fornire anche _l&#39;integrità transazionale_ ; sono necessari **protocolli di coordinamento** aggiuntivi. La replica dei dati su diversi sistemi fornisce un accoppiamento libero (nella disponibilità), ma crea problemi nel mantenimento della coerenza (sincronizzazione dei dati).

![enter image description here](https://www.yusufdagtekin.com/img/loose-coupling/service-coupling.png)

# 9
## Regolini 
### Che cos’è un Web Service?

Un Web service fornisce un **servizio** tramite Internet. Si tratta quindi di un’interfaccia attraverso la quale due dispositivi (o applicazioni) possono comunicare tra loro. 

Quando viene utilizzato un Web service, un client invia una richiesta a un server e vi provoca un’azione. Il server invia quindi una risposta al client.

> Inizialmente, i servizi web venivano realizzati solo tramite SOAP. Oggi vengono utilizzati anche altri protocolli, come ad esempio REST.

Questa tecnologia si basa su due caratteristiche fondamentali:

 - Multipiattaforma
 - Condivisione

#### Multipiattaforma: 
client e server non devono avere le stesse configurazioni per comunicare tra loro. Il servizio web fornisce quindi un terreno comune.

#### Condivisione: 
nella maggior parte dei casi, un servizio web non è disponibile solo per un unico client, anzi, spesso vi accedono molteplici client contemporaneamente tramite Internet.


> Inizialmente, i servizi web venivano realizzati solo tramite SOAP. Oggi vengono utilizzati anche altri protocolli, come ad esempio REST.


# 10
## Sher
### Qual è la struttura di un Web Service?

L’insieme dei protocolli di rete di un Web Service, sono utilizzati per definire, localizzare, realizzare e far interagire tra di loro i Web Service. È composta principalmente da 4 aree: Trasporto del servizio → Responsabile per il trasporto dei messaggi tra le .applicazioni in rete. XML messaging → Tutti i dati scambiati sono formati mediante <tag> XML, in modo che egli stessi possano essere utilizzati ad entrambi i capi della connessione; il messaggio può essere codificato conformemente allo standard SOAP. Descrizione del servizio → L’interfaccia pubblica di un Web Server viene descritta tramite WSDL, un linguaggio basato su XML usato per la creazione di documenti descrittivi delle modalità di interfacciamento ed utilizzo del Web Service. Elencazione dei servizi → La centralizzazione della descrizione e della localizzazione dei Web Service in un “registro” comune permette la ricerca ed il reperimento in maniera veloce dei Web Service disponibile in rete; per questa operazione viene utilizzato il protocollo UDDI.




# 11
## Sannicolò

##  Come viene utilizzato un Web Service?

Quando viene utilizzato un Web service, un client invia una richiesta a un server e vi provoca un'azione. 

Il server invia quindi una risposta al client. Il protocollo di base per i Web service è HTTP. 

Questo protocollo si occupa di mettere in comunicazione il servizio web con l’applicazione che intende usufruire delle sue funzioni. 

Oltre ad HTTP però, i servizi web utilizzano molti altri standard web, tutti basati su XML, tra cui: XML Schema, UDDI (Universal Description, Discovery and Integration), WSDL (Web Services Description Language) ,SOAP (Simple Object Access Protocol). 

Tale caratteristica si ottiene associando all'applicazione un'interfaccia software che espone all'esterno il servizio/i associato/i e utilizzando la quale altri sistemi possono interagire con l'applicazione stessa attivando le operazioni descritte nell'interfaccia tramite appositi "messaggi" di richiesta: tali messaggi di richiesta sono inclusi in una "busta" (SOAP), formattati secondo lo standard XML, incapsulati e trasportati tramite i protocolli del Web.


# 12
## Capa
### Che cos’è un servizio di discovery?

AWS Application Discovery Service aiuta i clienti aziendali a pianificare i progetti di migrazione raccogliendo informazioni sui loro data center locali.
I dati raccolti vengono conservati in formato crittografato in un datastore AWS Application Discovery Service. Questi dati possono essere esportati come file CSV e usati per stimare il costo totale di proprietà (TCO) dell'esecuzione su AWS e per pianificare la migrazione ad AWS. Questi dati sono inoltre disponibili in AWS Migration Hub, dove è possibile migrare i server individuati e tenerne traccia durante la loro migrazione ad AWS.

Vantaggi: 

- Identificazione affidabile per la pianificazione della migrazione
- Raccoglie informazioni sulle specifiche dei server, dati sulle prestazioni e dettagli sui processi in esecuzione e sulle connessioni di rete. 
- Integrato con migration hub:
è integrato con AWS Migration Hub che semplifica il monitoraggio della migrazione
- Protezione dei dati tramite crittografia:
 fornisce la protezione per i dati raccolti crittografandoli
- Interazione con esperti di migrazione:
Questi professionisti sono formati per analizzare l'output di Application Discovery Service e possono aiutare a ottenere informazioni più approfondite sull'ambiente locale e consigliare le strategie di migrazione appropriate.

# 13
## Tarolli


### Che cos'è WSDL

WSDL &egrave; l&apos;acronimo di Web Service Description Language, un linguaggio per la *descrizione* dei *servizi web* in formato *XML*. &Egrave; un file che definisce i tipi di dato, i messaggi e il tipo di comunicazione che ogni messaggio necessita.

Si divide in due parti fondamentali: una parte descrive l&apos;implementazione del servizio, tramite gli attributi Service e PortType, l&apos;altra definisce l&apos;interfaccia del servizio descrivendo i messaggi, i metodi e il tipo di dati supportato.

WSDL &egrave; composto dai seguenti elementi:
-   *\<Types>: definisce i tipi di dato usati all&apos;interno degli elementi *\<message>
    
-   *\<message>*: descrive i dati scambiati utilizzando i tipi definiti nella sezione types. Ogni messaggio &egrave; identificato univocamente da un attributo name.
    
-   *\<portType>: specifica le operazioni supportate dal servizio web. Ogni elemento portType contiene uno o pi&ugrave; elementi *\<operation>. Ogni elemento \<operation> &egrave; assimilabile ad un metodo Java e pu&ograve; specificare un messaggio di input e uno di output.

-   *\<binding>*: definisce informazioni sul protocollo di trasporto utilizzato.
    
-   *\<service>*: specifica l&apos;URL del servizio web.

Inserire immagine wsdl.jpg

# 14
## de Sire
### Quali sono le caratteristiche del paradigma SOAP?

Protocollo che si basa su XML (i messaggi sono indipendenti dal linguaggio di programmazione usato e dalla piattaforma), ed è utilizzato per trasportare le chiamate remote di procedure (Remote Procedure Call, RPC) tramite HTTP.

Permette ai Client di connettersi ai servizi che si trovano distribuiti in rete e di richiamare i metodi da remoto. 

Un messaggio SOAP non è altro che un documento XML che descrive una richiesta o il risultato di elaborazione. Esso è costituito dai seguenti elementi:

- **Envelope**: rappresenta il contenitore del messaggio e costituisce l’elemento root del documento XML
- **Header**: è un elemento opzionale che contiene informazioni globali sul messaggio; 
- **Body**: rappresenta la richiesta di elaborazione o la risposta derivata da una elaborazione
- **Fault**: se presente, fornisce informazioni sugli errori che si sono verificati durante l’elaborazione.

# 15
## Voltolini L
### Caratteristiche REST API

un’API REST è un’interfaccia di programmazione che usa HTTP per gestire dati remoti.

Consiste in due principali funzioni:

1) ***definire delle risorse (dati) accessibili via Web**, ed identificarle con degli URL*
1) ` `***mappare le operazioni CRUD** (Create, Retrieve, Update, Delete) su tali risorse ai verbi del protocollo HTTP (POST, GET, PUT, DELETE)*

Uno dei principi di questo sistema è quello del utilizzo di un’interfaccia uniforme (Uniform Interface), cioè quella che sostiene che le modalità di interazione tra i componenti del sistema deve essere regolata da convenzioni uniformi; ovvero deve seguire quattro piccole regole:

- ***identificazione delle risorse**: deve essere definito un meccanismo per identificare le risorse accessibili sul sistema*
- ***manipolazione delle risorse tramite una loro rappresentazione**: le risorse non vengono accedute direttamente, ma vengono fornite delle rappresentazioni*
- ***messaggi autodescrittivi**: la semantica delle risorse e dei metadati deve essere accessibile a tutti i componenti del sistema, inclusi i sistemi di caching*
- *h**ypermedia come il motore per la gestione dello stato dell’applicazione**: ogni risorsa contribuisce alla rappresentazione dello stato dell’applicazione e deve fornire l’accesso ad eventuali risorse collegate*



# 16
## Zendri

### Vantaggi e svantaggi di REST.

Vantaggi:

- REST e’ semplice da utilizzare e imparare.
- Permette di organizzare applicazioni complesse e semplifica l’utilizzo delle risorse.
- L’HTTP proxy server e cache permettono di gestire il traffico.
- Semplice da utlizzare in vari tipi di applicazioni.
- Utlizza le chiamate standard di HTTP per ricevere e richiedere data.
- Puo’ essere utilizzato per sincronizzare i dati di un sito web senza difficolta’.
- Utilizza formati flessibili come XML e JSON.

Svantaggi:

- La mancanza degli stati portano ad una pesante applicazione client.
- La mancanza di sicurezza lo rende insicuro per l’utilizzo di dati confidenziali tra client e server.

# 17
## Pasulo



### Quali sono i componenti di un'architettura monolitica?

|

## Componenti principali:
- Database
- Applicazione lato server
- Interfaccia lato client

---

Tutti i componenti sono presenti su <strong>un'unica macchina</strong>.
<br/>
![Architettura monolitica](images/monolithic.png)

|

## <u>Database</u>
<p>Si occupa di memorizzare i dati dei client</p>

|

## <u>Applicazione lato server</u>

<p>Accetta e gestisce le richieste dei client, mandando dei dati o effettuando delle operazioni sul database</p> 

|

## <u>Interfaccia client</u>
<p>Parte visibile al client. Fornisce al client dei metodi per comunicare col server (pulsanti per inviare richieste)</p>


# 18
## Galli



### Quali sono i componenti di un&#39;architettura a microservizi?

| Progettazione di unità | L’applicazione è costituita da servizi ad accoppiamento disperso. Ogni servizio supporta un singolo task business. |
| --- | --- |
| Riutilizzo delle funzionalità | I microservizi definiscono le API che espongono la propria funzionalità con qualsiasi client. I client possono essere anche altre applicazioni. |
| Comunicazione all’interno dell’applicazione | Per comunicare tra loro, i microservizi di un’applicazione utilizzano il modello di comunicazione richiesta-risposta. L’implementazione tipica utilizza chiamate API REST basate sul protocollo HTTP. |
| Efficienza tecnica | Ogni microservizio può essere sviluppato mediante un linguaggio di programmazione e una struttura più adatta al problema che il microservizio è progettato per la risoluzione. |
| Gestione dati | Decentralizzato: ogni microservizio può utilizzare il proprio database. |
| Distribuzione | Ogni microservizio viene distribuito in modo indipendente, senza influire sugli altri microservizi nell’applicazione. |
| Gestione | I microservizi sono semplici, dedicati e indipendenti. Pertanto, l’applicazione è più facile da gestire. |
| Flessibilità | La funzionalità dell’applicazione viene distribuita tra più servizi. Se un microservizio ha esito negativo, la funzionalità offerta dagli altri microservizi continua a essere disponibile. |
| Scalabilità | Ogni microservizio può essere ridimensionato individualmente dagli altri servizi. |




# 19
## Fabiani

### Vantaggi e svantaggi di un’architettura monolitica
 
#### Vantaggi :
 
-   ***semplicità*** : semplice da **costruire**, **testare** e rilasciare; offre una buona **scalabilità** orizzontale, eseguendo più copie dell'applicazione
    
-   ***performance*** : i componenti condividono la memoria, ciò permette una **comunicazione** che è più **veloce** di quella da servizio a servizio
    
-   ***problemi trasversali*** : può gestire facilmente **problemi trasversali**, come logging, gestione della configurazione e monitoraggio delle prestazioni
    
 
#### Svantaggi :
 
-   ***affidabilità*** : **un errore** in uno dei moduli del monolite può mandare in **down tutta l’applicazione**
    
-   ***aggiornamento*** : a causa di una singola base di codice di grandi dimensioni l’**aggiornamento** e la **distribuzione** di esso possono essere **complicati**
    
 
- ***technology stack*** : siccome vi è una stretta **correlazione** e **dipendenza** tra i vari **moduli**, è **costoso** passare a una tecnologia, linguaggio o framework nuovo



# 20
## Rocca
### Vantaggi e svantaggi di un'Architettura SOA

#### Vantaggi
- **Riusabilità dei servizi:** Grazie all’indipendenza dei componenti funzionali in questo tipo di architettura, essi possono essere riutilizzati in altre applicazioni senza influenzare altri servizi.
- **Migliore manutenibilità:** Dato che ogni service è un’unità indipendente, facili da aggiornare e da manutenere senza influenzare altri servizi
- **Maggior affidabilità:** I Service sono più semplici da testare rispetto a grandi blocchi di codice presenti nei monoliti, il che rende il prodotto più affidabile.
- **Sviluppo parallelo:** Dato che un’architettura SOA è composta da layer, è possibile lo sviluppo parallelo di diverse parti.

#### Svantaggi
- **Gestione complessa:** É lo svantaggio principale. Ogni service deve assicurarsi che i messaggi siano inviati in tempo, il che diventa difficile data la loro enorme quantità (che può essere maggiore di un milione per volta).
- **Alti costi d’investimento:** Lo sviluppo di un’architettura SOA richiede alti costi in termini di risorse umane, tecnologia e sviluppo.
- **Sovraccarico extra:** Tutti gli input devono essere validati prima che un service interagisca con un altro. Quando si utilizzano più servizi aumenta il tempo di risposta e diminuiscono le prestazioni complessive.


# 21
## Santaniello

### Vantaggi e svantaggi di un'architettura a microservizi

Le architetture a microservizi offrono diversi vantaggi: anzitutto consentono di abbreviare i cicli di sviluppo, permettendo aggiornamenti più agili, ed inoltre possono essere distribuiti su più server ed infrastrutture in base alle esigenze aziendali, consentendo dunque un ottima scalabilità. 

Ciascun servizio è inoltre indipendente da tutti gli altri, fornendo dunque un ottima fault tolerance. Poichè inoltre le app basate su microservizi sono più piccole  tutti i problemi associati a tali deployment vengono eliminati.

 Viene anche migliorata l’accessibilità, poichè le app più grandi vengono suddivise in parti più piccole, permettendo di essere maggiormente comprensibili agli sviluppatori. Infine, gli sviluppatori possono scegliere il linguaggio e la tecnologia a loro piacimento.


Questo tipo di architettura presenta però alcuni svantaggi tra cui la dedica del tempo nell'identificare le dipendenze dei vari servizi, la  compromissione della retrocompatibilità causata dagli aggiornamenti. 



