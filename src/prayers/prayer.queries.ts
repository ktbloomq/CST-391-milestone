export const prayerQueries = {
    readPrayers: `
        SELECT postID, userID, content, likes, parent_post
        FROM prayer.posts
    `,
    readPrayersById: `
        SELECT postID, userID, content, likes, parent_post
        FROM prayer.posts
        WHERE postID = ?
    `,
    readPrayersByUserId: `
    SELECT postID, userID, content, likes, parent_post
    FROM prayer.posts
    WHERE userID = ?
    `,
    createPrayer: `
    INSERT INTO
    prayer.posts(userID, content, likes, parent_post)
    VALUES(?,?,?,?)
    `,
    updatePrayer: `
    UPDATE prayer.posts
    SET content = ?
    WHERE postID = ?
    `,
    deletePrayer: `
    DELETE FROM prayer.posts
    WHERE postID = ?
    `
}