import db from "../mysql.js";

const PostQueris = {};

///Post

PostQueris.getPost = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT * FROM post", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

PostQueris.addPost = async (postData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let postObj = {
      comentario: postData.comentario,
    };
    return await db.query("INSERT INTO post SET ?", postObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

PostQueris.getPostById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM post WHERE id = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end);
  }
};

PostQueris.getPostByName = async (comentario) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      `SELECT * FROM post WHERE comentario LIKE '%${comentario}%'`,
      comentario,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end);
  }
};

PostQueris.deletePost = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("DELETE FROM post WHERE id =?", id, "delete", conn);
  } catch {
    throw new Error(e);
  } finally {
    conn && (await conn.end);
  }
};
export default PostQueris;
