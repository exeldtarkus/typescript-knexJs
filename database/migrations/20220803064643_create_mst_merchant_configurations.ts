import {Knex} from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
    create table if not exists mst_merchant_configurations
    (
        id                       int auto_increment primary key,
        uuid                     varchar(50),
        bengkel_id               bigint(20),
        espay_merchant_code      varchar(100) null,
        espay_merchant_signature varchar(100) null,
        espay_merchant_api_key   varchar(100) null,
        created_at               timestamp    null,
        updated_at               timestamp    null
    );
`);
}


export async function down(knex: Knex): Promise<void> {
    await knex.raw(`
        drop table mst_merchant_configurations;
`);
}

