##3 Novembre 2015 ore 19:00
###How a promise can get you out of callback hell
####Andrea Lattuada <a href="https://twitter.com/utaal" target="_blank" class="icon-twitter"></a>

<a href="http://www.eventbrite.it/e/biglietti-milano-js-19042800529?ref=ebtn" target="_blank"><img src="https://www.eventbrite.it/custombutton?eid=19042800529" alt="Eventbrite - Milano JS" /></a>

In javascript si scrive spesso codice per reagire ad un evento o un’azione come un click su un pulsante nel browser o il ricevimento di una richiesta sul server: questo codice viene spesso fornito al sistema sotto forma di funzioni di callback, che verranno invocate al momento opportuno. Nella gestione di una serie di azioni ed eventi, questo stile di programmazione ("CPS") può risultare in codice "ad albero di natale”, costituito da tante funzioni anonime una dentro l’altra e tipicamente difficile da leggere, rifattorizzare e mantenere.

Esploreremo una serie di astrazioni e librerie volte a mitigare questo problema. Parleremo di Promise, fibers, estensioni alla sintassi come async/await e altro.

#####L'incontro si terrà in StartMiUp presso Copernico
<div class="frame">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.0069000733693!2d9.20309423016357!3d45.48980579943327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xf85d28f3d532d3b5!2sCopernico+Milano!5e0!3m2!1sen!2sit!4v1431020946555" width="100%" height="300" frameborder="0" style="border:0"></iframe>
</div>
