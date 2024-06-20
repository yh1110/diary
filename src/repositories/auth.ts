import { supabase } from "../lib/supabase";

export const authRepository = {
    async signup(
        name: string,
        birthdate: string,
        email: string,
        password: string
    ) {
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
};
