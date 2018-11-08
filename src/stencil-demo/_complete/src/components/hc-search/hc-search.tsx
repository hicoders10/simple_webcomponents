import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'hc-search',
    shadow: false,
    styleUrl: ''
})
export class HcSearch {
    @Prop() placeholder: string = 'Search...';
    @Event() changed: EventEmitter;
    
    onInputChanged(e) {
        this.changed.emit(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={(e) => this.onInputChanged(e)} placeholder={this.placeholder} class={{'form-control': true}}/>
            </div>
        )
    }
}