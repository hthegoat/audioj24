<template>
    <div class="p-4 max-w-md mx-auto">
      <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-6">
        <!-- Existing Fields: Name and Email -->
  
        <!-- Country Input -->
        <div>
          <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            v-model="form.country"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
  
        <!-- Checkboxes -->
        <div>
          <div class="flex items-center mb-4">
            <input
              id="artist"
              type="checkbox"
              v-model="form.isArtist"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="artist" class="ml-2 block text-sm text-gray-900">Artist</label>
          </div>
  
          <div class="flex items-center mb-4">
            <input
              id="listener"
              type="checkbox"
              v-model="form.isListener"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="listener" class="ml-2 block text-sm text-gray-900">Listener</label>
          </div>
  
          <div class="flex items-center">
            <input
              id="agree"
              type="checkbox"
              v-model="form.agreedToTerms"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              required
            />
            <label for="agree" class="ml-2 block text-sm text-gray-900">I Agree To The Terms & Conditions</label>
          </div>
        </div>
  
        <!-- Submit Button -->
        <!-- ... -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          country: '',
          isArtist: false,
          isListener: false,
          agreedToTerms: false,
        },
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.form);
        // Add your form submission logic here
      },
    },
  };
  </script>
  
  <style>
  /* Additional custom styling if needed */
  </style>
  