import { Query} from './index'

const findOneByEmail = async (email: string) => Query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`);

const findOneById = async (id: number) => Query(`SELECT * FROM users WHERE id = ${id} LIMIT 1`);

export default {
    findOneByEmail,
    findOneById
}

