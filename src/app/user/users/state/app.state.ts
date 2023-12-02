import { Authentication } from "../../auth/auth";
import { Settings } from "../../settings/settings";
import { User } from "../user";

export interface AppState {
  users: User[];
  auth: Authentication;
  settings: Settings;
}
