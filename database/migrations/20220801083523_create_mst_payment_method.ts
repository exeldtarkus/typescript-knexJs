import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
        create table if not exists mst_payment_method
        (
            id          int auto_increment
                primary key,
            uuid        varchar(50),
            name        varchar(100)         null,
            code        varchar(100)         null,
            description text                 null,
            created_at  timestamp            null,
            updated_at  timestamp            null,
            active      tinyint(1) default 1 null
        );
    `);
}


export async function down(knex: Knex): Promise<void> {
    await knex.raw(`
        drop table mst_payment_method;
`   );
}