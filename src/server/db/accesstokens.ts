import { Query } from './index';

const findOne = async (id: string, token: string) => Query(`SELECT * FROM accesstokens WHERE id = ${id} AND token = '${token}'`);

const insert = async (userid: number) => Query(`INSERT INTO accesstokens (userid) VALUES (${userid})`);

const update = async (id: number, token: string) => Query(`UPDATES accesstokens SET token = '${token} WHERE id is = ${id}'`);

export default {
    findOne,
    insert,
    update
}