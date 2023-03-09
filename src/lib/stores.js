import { writable } from 'svelte/store';
import { persist, createLocalStorage } from "@macfja/svelte-persistent-store";

export let LoginStatus = persist(writable({loggedIn: false}), createLocalStorage(), "LoginStatus")

