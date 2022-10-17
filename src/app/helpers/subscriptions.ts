import { Subscription } from "rxjs";

export class SubsHelper {
    subs: Subscription[] = [];

    addSubs(current_sub: Subscription): void {
        this.subs.push(current_sub);
    }

    unsubscribeSubs() {
        for(let sub of this.subs){
            sub.unsubscribe();
        }
    }
}