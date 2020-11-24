import * as mysql from "mysql";
import config from "../config/development";
import Blogs from "./blogs";
import Authors from "./authors";
import BlogTags from "./blogtags";
import accesstokens from './accesstokens'

export const Connection = mysql.createConnection(config.mysql);

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export default {
    Blogs,
    Authors,
    BlogTags,
    accesstokens
}