// app.js
const app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        user: null,
        banks: [],
        selectedBank: null,
        balance: 0,
        movements: []
    },
    methods: {
        login() {
            // Utiliza las credenciales de Belvo para obtener un token de acceso
            const belvoClientId = '54b2e247-6860-4d05-9065-ca2882096a72';
            const belvoSecretKey = 'ndMw5sDU9Rzxoke2JnR@LkuK15PhjVB4F7PKCwievYgsJ#LiwTfQheitmfk2zQIl';

            fetch('https://api.belvo.com/auth/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${belvoClientId}:${belvoSecretKey}`)}`
                },
                body: JSON.stringify({
                    // Puedes incluir otros datos de autenticación según lo requiera Belvo
                })
            })
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta y realiza acciones adicionales si es necesario
                console.log('Token de acceso:', data.access_token);

                // Actualiza el estado de la aplicación o realiza acciones adicionales
                this.user = 'UsuarioAutenticado'; // Por ejemplo, actualiza el usuario
                this.fetchBanks(); // Llama a la función para obtener los bancos
            })
            .catch(error => {
                console.error('Error al autenticar con Belvo:', error);
            });
        },

        register() {
            // Implementa la lógica de registro con Belvo
        },

        logout() {
            // Cierra la sesión estableciendo 'user' a null
            this.user = null;
        },

        selectBank(bank) {
            this.selectedBank = bank;
            this.fetchKPIAndMovements();
        },

        fetchKPIAndMovements() {
            // Implementa la lógica para obtener el KPI y movimientos
        },

        fetchBanks() {
            // Implementa la lógica para obtener la lista de bancos de Belvo
        }
    },
    mounted() {
        // Llama a fetchBanks al cargar la aplicación si el usuario está autenticado
        if (this.user) {
            this.fetchBanks();
        }
    }
});
