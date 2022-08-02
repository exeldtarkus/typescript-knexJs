import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
        create table if not exists mst_payment_method
        (
            id          int auto_increment
                primary key,
            uuid        varchar(50),
            bank_name   varchar(100)         null,
            bank_code   varchar(100)         null,
            logo        varchar(100)         null,
            type        varchar(100)         null,
            admin_fe    int(11)              null,
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