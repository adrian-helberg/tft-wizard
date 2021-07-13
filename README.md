# TFT-Wizard

## A fresh envorinment can be found under branch fresh-env

## Lernkurve
# v-show vs. v-if
<div v-show="exp">...</div> versicht das dom-element lediglich mit einem display:none, wenn exp falsy ist
<div v-if="exp">...</div> hängt das element nur an den dom, wenn exp truly ist

# v-for
<div v-for="element in elements" v-bind:key="element.id">{{element.name}}</div> braucht einen eindeutigen key, um saubere Updates zu ermöglichen
# Iteration
<div v-for="n in 10" v-bind:key="n">{{n}}</div>
# Attribute dynamisch binden
<a :href="`?id=${index}`">...</a> ist die Kurzschreibweise für <a v-bind:href="`?id=${index}`">...</a> also v-bind kann weggelassen werden
# Methoden
<button @click="fun"></button> ist die Kurzform von <button v-on:click="test">Test</button> Methoden können dynamisch über ein '@' gebinded werden