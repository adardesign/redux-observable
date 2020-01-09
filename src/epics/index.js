import { combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { ajax } from "rxjs/observable/dom/ajax";

import {
  FETCH_WHISKIES,
  fetchWhiskiesFailure,
  fetchWhiskiesSuccess
} from "../actions";

export const rootEpic = combineEpics();
