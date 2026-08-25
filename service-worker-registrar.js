window.updateAvailable = async (dn) => {
    if (!('serviceWorker' in navigator)) {
        return 'Service workers are not supported by this browser';
    }

    let registration = await navigator.serviceWorker.register('service-worker.js');

    console.info('Service Worker registered with scope:', registration.scope); 

    registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = async () => {
            switch (installingWorker.state) {
                case 'installed':
                    await dn.invokeMethodAsync('OnUpdateAvailable', !!navigator.serviceWorker.controller);
                    break;
            }
        }
    };
};

window.registerForUpdateAvailableNotification = async (caller) => {
    await window.updateAvailable(caller);    
};