<div class="flex flex-col justify-center align-middle min-h-screen ">

    <div class="flex flex-col align-middle self-center pt-8 pb-4 -mt-20">
        <h1 class="text-2xl font-bold text-gray-100 sm:text-3xl">
          Contactez-nous
        </h1>
    
        <p class="mt-1.5 text-sm text-gray-500">
            Nous vous répondrons dans les plus brefs délais.
        </p>
    </div>

    <div class="flex align-middle self-center mt-4">
        <label
            for="UserName"
            class="block bg-slate-200 overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
            <span class="text-xs font-medium text-gray-700">Nom & Prénom</span>
            <input
                type="text"
                id="UserName"
                placeholder="Michel Dupont"
                class="mt-1 w-full bg-slate-200 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
        </label>
    </div>

    <div class="flex align-middle self-center mt-4">
        <label
            for="UserEmail"
            class="block bg-slate-200 overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
            <span class="text-xs font-medium text-gray-700">Email</span>
            <input
                type="email"
                id="UserEmail"
                placeholder="michel.dupont@protonmail.com"
                class="mt-1 w-full bg-slate-200 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
        </label>
    </div>

    <div class="flex align-middle self-center mt-4">
        <label
            for="UserPhone"
            class="block bg-slate-200 overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
            <span class="text-xs font-medium text-gray-700">Téléphone</span>
            <input
                type="tel"
                id="UserPhone"
                placeholder="+33644444444"
                class="mt-1 w-full bg-slate-200 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
        </label>
    </div>

    <div class="flex align-middle self-center mt-4">
        <label
            for="UserProject"
            class="block bg-slate-200 overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
            <span class="text-xs font-medium text-gray-700">Votre projet</span>
            <textarea
                id="UserProject"
                placeholder="Mon message"
                class="mt-1 w-full bg-slate-200 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm resize-y"
            ></textarea>
        </label>
    </div>

    <div class="flex self-center sm:gap-4">  
          <button
            class="rounded-md mt-5 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
          >
            Send it
          </button>
    </div>

</div>
