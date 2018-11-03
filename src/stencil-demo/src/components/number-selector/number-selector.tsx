import { Component, State, Prop, EventEmitter, Event } from "@stencil/core";

@Component({
    tag: 'hc-number-selector',
    shadow: true
})
export class NumberSelector {

    @Prop() max: number;
    @Prop() min: number;

    @Event() changed: EventEmitter;

    @State() value: number = 0;

    onClickOnAdd() {
        if(this.value < this.max) {
            this.value++;
            this.onNumberChange();
        }
    }

    onClickOnSub() {
        if(this.value > this.min) {
            this.value--;
            this.onNumberChange();
        }
    }

    onNumberChange() {
        this.changed.emit(this.value);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onClickOnSub()}>-</button>
                <span>{this.value}</span>
                <button onClick={() => this.onClickOnAdd()}>+</button>
            </div>
        )
    }
}