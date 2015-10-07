##3 Novembre 2015 ore 19:00
###How a promise can get you out of callback hell
####Andrea Lattuada <a href="https://twitter.com/utaal" target="_blank" class="icon-twitter"></a>

In virtù delle sue origini nel browser, Javascript è un linguaggio orientato alla programmazione asincrona - il codice viene spesso eseguito in risposta ad un'azione. Sul server, dove si ritrova la natura single-threaded del linguaggio, non è possibile attendere in modo sincrono la risposta a chiamate di sistema bloccanti. Il programmatore è chiamato a fornire delle funzioni di callback che saranno eseguite dal runtime quando l'attività sarà stata completata. La programmazione basata su callback può risultare in codice "ad albero di natale". Queste sono tipicamente difficili da leggere, rifattorizzare e mantenere. Esploreremo una serie di astrazioni e librerie di utilità volte a mitigare questo problema e compareremo codice scritto facendo uso di questi strumenti con quello basato su callback. Parleremo di Promise, fibers, estensioni alla sintassi come async/await e altro.

#####L'incontro si terrà in StartMiUp presso Copernico
<div class="frame">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.0069000733693!2d9.20309423016357!3d45.48980579943327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xf85d28f3d532d3b5!2sCopernico+Milano!5e0!3m2!1sen!2sit!4v1431020946555" width="100%" height="300" frameborder="0" style="border:0"></iframe>
</div>
