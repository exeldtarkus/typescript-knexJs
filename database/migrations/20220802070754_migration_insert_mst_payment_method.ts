import { Knex } from "knex";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";


const dateNow = moment().format("YYYY-MM-DD HH:mm:ss");

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    INSERT  INTO mst_payment_method(uuid, bank_name, bank_code, logo, type, admin_fe, description, created_at, updated_at, active) 
    vaLUES  ('${uuidv4()}','Danamon Virtual Account','011','/bank/ico.Danamon.png','va',6000,NULL,'${dateNow}',NULL,1),
            ('${uuidv4()}','BRI Virtual Account','002','/bank/ico.BRI.png','va',6000,NULL,'${dateNow}',NULL,1),
            ('${uuidv4()}','BNI Virtual Account','009','/bank/ico.BNI.png','va',6000,NULL,'${dateNow}',NULL,1),
            ('${uuidv4()}','BCA Virtual Account','014','/bank/ico.BCA.png','va',6000,NULL,'${dateNow}',NULL,1),
            ('${uuidv4()}','Mandiri Virtual Account','008','/bank/ico.MANDIRI.png','va',6000,NULL,'${dateNow}',NULL,1),
            ('${uuidv4()}','CIMB Virtual Account','022','/bank/ico.CIMB.png','va',6000,NULL,'${dateNow}',NULL,1),
            ('${uuidv4()}','Maybank Virtual Account','016','/bank/ico.Maybank.png','va',6000,NULL,'${dateNow}',NULL,1),
            ('${uuidv4()}','Permata Virtual Account','013','/bank/ico.Permata.png','va',6000,NULL,'${dateNow}',NULL,1),
            ('${uuidv4()}','OVO','503',NULL,'wallet',6000,NULL,'${dateNow}',NULL,1)
  `);
}


export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DELETE FROM mst_payment_method`);
}

