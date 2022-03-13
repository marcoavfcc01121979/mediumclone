import ormconfig from '../src/ormconfig'

const ormseedconfig = {
    ...ormconfig,
    migrations: ['src/seeds/*.ts'],
    cli: {
        migrationsDir: 'src/seeds',
    },
};

export default ormseedconfig;