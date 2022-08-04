import { Knex } from "knex";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";


const dateNow = moment().format("YYYY-MM-DD HH:mm:ss");

export async function up(knex: Knex): Promise<void> {
  /* 
    Insert Data for Test Espay Default Value, 
    Example Value : (
      Merchant Code : SGWMOSERVICES02
      Merchant Name : MOSERVICES02
      API Key for Generate Espay Embeded Scrip : 776b8c15b1ab864e1b96bb61d6bb56d0
      Signature: j787geyy4qzfr42b
      Password : VOYTQTJP
    )

    Query for GET List Bengkel on adirakuApps Moservice Promo (
      SELECT  a.id, a.title, b.bengkel_id, c.bengkel_name, a.available_until, sysdate() AS datenow
      FROM    content.mst_promo a, content.map_promo_bengkel b, bengkel.mst_bengkel c
      WHERE   a.id = b.promo_id 
      AND     b.bengkel_id = c.bengkel_id 
      AND     a.zone_id IN (3,4,5,6,7,8,9,10,11,12,13,14)
      AND     a.available_until > sysdate() 
      GROUP   BY b.bengkel_id ;
    )

  */
  await knex.raw(`
    INSERT  INTO mst_merchant_configurations(uuid, bengkel_id, espay_merchant_code, espay_merchant_signature, espay_merchant_api_key, created_at, updated_at) 
    VALUES  ('${uuidv4()}','824','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','112','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','127','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','130','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','137','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','142','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','339','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','832','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','833','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','838','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','843','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','895','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','896','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','903','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','905','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','908','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','910','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','961','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','993','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','1031','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','1190','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','1317','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','1540','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','1818','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','2093','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL),
            ('${uuidv4()}','2130','SGWMOSERVICES02','j787geyy4qzfr42b','776b8c15b1ab864e1b96bb61d6bb56d0','${dateNow}',NULL)
  `);
}


export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DELETE FROM mst_merchant_configurations`);
}

