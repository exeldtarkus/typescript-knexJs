import {Knex} from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
        create table if not exists tr_payments
        (
            id                int auto_increment primary key,
            uuid              varchar(50),
            amount            decimal(15, 2),
            bengkel_id        bigint(20),
            payment_method_id bigint(20),
            va_no             bigint(20),
            ref               enum ('promo', 'transaction'),
            ref_id            bigint(20),
            status            enum ('pending', 'paid', 'fail'),
            created_at        timestamp null,
            updated_at        timestamp null,
            paid_at           timestamp null,
            fail_at           timestamp null
        );
    `)
}


export async function down(knex: Knex): Promise<void> {
    await knex.raw(`
        drop table tr_payments;
    `)
}

