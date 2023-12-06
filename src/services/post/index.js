import {db} from '../firebase'
import { getFirestore, collection, getDocs, query, doc, getDoc, collectionGroup } from 'firebase/firestore';

export const getPost= async()=> {
    try {
      // Realiza una consulta para obtener documentos de la colección principal "users"
      const usersCollection = collection(db, 'user');
      const usersSnapshot = await getDocs(usersCollection);

      let users;
      for (const userDocSnap of usersSnapshot.docs) {
        const userData = userDocSnap.data();
        //console.trace(userData);
        // Realiza una consulta para obtener la subcolección "posts" dentro de cada usuario
        const postsCollection = collection(userDocSnap.ref, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        const posts = [];
      
        for (const postDocSnap of postsSnapshot.docs) {
          const postData = postDocSnap.data();
          //console.trace(postData);
          // Realiza una consulta para obtener la subcolección "comments" dentro de cada post
          const commentsCollection = collection(postDocSnap.ref, 'comments');
          const commentsSnapshot = await getDocs(commentsCollection);
      
          const comments = [];
      
          for (const commentDocSnap of commentsSnapshot.docs) {
            comments.push({
              id: commentDocSnap.id,
              ...commentDocSnap.data()
            });
          }
          posts.push({
            id: postDocSnap.id,
            ...postData,
            comments
          });
        }
      
        users = {
            user: { id: userDocSnap.id,
            ...userData},
            posts
        };
      }
      return users;
    } catch (error) {
      console.error('Error al obtener documentos:', error);
      throw error;
    }
}

export default {getPost}