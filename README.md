# TFT-Wizard

## A fresh envorinment can be found under branch fresh-env

## Lernkurve

## v-show vs. v-if

```<div v-show="exp">...</div>``` versieht das dom-element lediglich mit einem display:none, wenn exp falsy ist

```<div v-if="exp">...</div>``` hängt das element nur an den dom, wenn exp truly ist

## v-for

```<div v-for="element in elements" v-bind:key="element.id">{{element.name}}</div>``` braucht einen eindeutigen key, um saubere Updates zu ermöglichen

## Iteration

```<div v-for="n in 10" v-bind:key="n">{{n}}</div>```

## Attribute dynamisch binden

```<a :href="`?id=${index}`">...</a>``` ist die Kurzschreibweise für ```<a v-bind:href="`?id=${index}`">...</a>``` also v-bind kann weggelassen werden

## Methoden

```<button @click="fun"></button>``` ist die Kurzform von ```<button v-on:click="test">Test</button>``` Methoden können dynamisch über ein '@' gebinded werden
Die Methoden im "data"-Objekt müssen "function()"-Blöcke sein, keine Arrow-functions

## Komponenten auslagern

MyComponent.vue:

```
<script>
export default {
  name: "MyComponent",
  ...,
}
</script>

App.vue:
import MyComponent from "./components/MyComponent.vue";
export default {
    ...,
    components: {
        MyComponent
    }
}
```

## Attribute über Events ansprechen

element-component:
```
 <template>
    <button @click="buttonClick">\</button>
</template>

<script>
export default {
    ...,
    props: ["item"],
    methods: {
        buttonClick() { this.$emit('someEvent', this.item); }
    }
}
</script>
```

list-component:
```
<template>
    <div @someEvent="doStuff"></div>
</template>

<script>
export default {
    ...,
    methods: {
        doStuff(el) { 
            console.log(el);
        }
    }
}
</script>
```

## Scoped styles

```<style> ... </style>``` Globale Styles
```<style scoped> ... </style>``` Scoped Styles

## Event modifier

```<div @click.prevent="fun">Click me</div>``` @click.prevent is equivalent of calling event.preventDefault() when the click event is triggered
Event modifier lassen sich verketten: @click.right.prevent feuert das click-event nur mit der rechten Maustaste
Alle HTML-Events lassen sich mit @ ansprechen: ```<div @mouseup="fun"></div>```

## Slots

```<slot></slot>``` ist ein Platzhalter für das beim Aufrufen einer Komponente zwischen den Komponenten-Tags steht
```<MyComponent>Test</MyComponent>``` für ```<template><div><slot></slot></div></template>``` -> slot wird zu Test
Child.vue: ```<slot>Default Text</slot>``` der default text lässt sich durch das 'Befüllen' des slots überschreiben, dazu
der Aufruf in der parent-komponente: ```<Parent><Child>Kein default Text</Child></Parent>``` (Slots sind zum 'Tauschen' von Elementen)
SLots können beliebig durch Kind-Komponenten durchgereicht werden, wenn alle den entsprechenden Slot definieren

## Plugins

import Plugin from ""; Vue.use(Plugin); Einbinden von Plugins

## Allgemein

```
export class Test {
    // public variables kommen in das 'data'-objekt von Vue
    constructor() {}
    // public methods kommen in das 'methods'-objekt von Vue
}
```

## Axios

Kümmert sich um anynchronen Kram
```this.axios.get(url).then((r) => {...});```

## Electron

Website als OS Programm, also praktische eine Website mit Zugriff auf das OS Dateisystem

## Watchers

Watchers sind praktisch die Subscriptions von Knockout, die ans Vue-Objekt attached werden:
```
new Vue({
    ...,
    watch: {
        fun: function() {
            ...
        }
    }
});
```