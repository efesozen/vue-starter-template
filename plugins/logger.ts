export default defineNuxtPlugin(() => {
  const logger = {
    info: (message: string, ...args: any[]) => {
      console.info(`[INFO] ${message}`, ...args);
    },
    
    error: (code: string, resource: string, ...args: any[]) => {
      console.error(`[ERROR] [${code}] [${resource}]`, ...args);
    },
    
    warn: (message: string, ...args: any[]) => {
      console.warn(`[WARN] ${message}`, ...args);
    },
    
    debug: (message: string, ...args: any[]) => {
      if (process.env.NODE_ENV !== 'production') {
        console.debug(`[DEBUG] ${message}`, ...args);
      }
    },
  };
  
  return {
    provide: {
      logger,
    },
  };
});