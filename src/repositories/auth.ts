import { supabase } from "../lib/supabase";

export const authRepository = {
	async signup(name: string, birthdate: string, email: string, password: string) {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: { data: { name, birthdate } },
		});
		if (error != null) throw new Error(error.message);
		return {
			...data.user,
			user_name: data.user?.user_metadata.name,
			birthdate: data.user?.user_metadata.birthdate,
		};
	},
	async login(email: string, password: string) {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) throw new Error(error.message);

		return {
			...data.user,
			userName: data.user?.user_metadata.name,
			birthdate: data.user?.user_metadata.birthdate,
		};
	},
	async getCurrentUser() {
		const { data, error } = await supabase.auth.getSession();
		if (error != null) throw new Error(error.message);
		if (data.session == null) return;

		return {
			...data.session.user,
			userName: data.session.user.user_metadata.name,
			birthdate: data.session.user.user_metadata.birthdate,
		};
	},
	async signout() {
		const { error } = await supabase.auth.signOut();
		if (error != null) throw new Error(error.message);
		return true;
	},
};
