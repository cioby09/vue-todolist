// Consegna

// Descrizione:
// Rifare l'esercizio della to do list.

// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos : [
                {
                    text: "Comprare il latte",
                    done: false
                },
                {
                    text: "Sistemare il giardino",
                    done: false
                },
                {
                    text: "Pulire la macchina",
                    done: false
                },
                {
                    text: "Fare il bucato",
                    done: false
                },
            ],
            newTodo: {
                text: "",
                done: ""
            },
            error: false
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.text.length > 0) {
                this.error = false;

                this.newTodo.text = this.newTodo.text[0].toUpperCase() + this.newTodo.text.substring(1);

                this.todos.unshift({
                    text: this.newTodo.text,
                    done: false
                });
                this.newTodo.text = "";
            } else {
                this.error = true;

                setTimeout(() => {
                    this.error = false;
                }, 3000);
            }
        },
        removeTodo(indexToRemove) {
            this.todos.splice(indexToRemove, 1);
        },
        toggleDone(indexToToggle) {
            this.todos[indexToToggle].done = !this.todos[indexToToggle].done;
        }
    }
}).mount("#app");