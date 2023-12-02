import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UiState, initialUiState } from "./ui-state";

@Injectable({
  providedIn: 'root'
})
export class UiStateStore {

  private _uiState: BehaviorSubject<UiState> = new BehaviorSubject(initialUiState);

  get uiState() {
    return this._uiState.asObservable();
  }

  startBackendAction(message: string) {
    this._uiState.next({
      actionOngoing: true,
      message
    })
  }

  endBackendAction() {
    this._uiState.next({
      actionOngoing: false,
      message: ''
    })
  }
}
