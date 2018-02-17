// increment

function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment

function addComent(postId, author, commnet) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove comment

function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}