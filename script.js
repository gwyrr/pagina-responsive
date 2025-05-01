const { createApp } = Vue

createApp({
  data() {
    return {
      step: 1,
      formData: {
        nombre: '',
        correo: '',
        contrasena: '',
        ciudad: '',
        direccion: '',
        genero: '',
        vehiculod: '',
        vehiculofavorito: '',
        intereses: []
      },
      interesesDisponibles: ['Alto cilindraje', 'Elegancia', 'Todoterreno', 'Deportivo', 'casual']
    }
  },
  methods: {
    nextStep() {
      if (this.validateStep()) {
        if (this.step < 4) this.step++
      } else {
        alert('Por favor completa todos los campos requeridos antes de continuar.');
      }
    },
    prevStep() {
      if (this.step > 1) this.step--
    },
    validateStep() {
      if (this.step === 1) {
        return this.formData.nombre && this.formData.correo && this.formData.contrasena
      } else if (this.step === 2) {
        return this.formData.ciudad && this.formData.direccion && this.formData.genero
      } else if (this.step === 3) {
        return this.formData.mascotas && this.formData.artistaFavorito && this.formData.intereses.length > 0
      }
      return true
    }
  }
  
}).mount('#app')
