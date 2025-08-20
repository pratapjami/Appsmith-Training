export default {
	dummy () {
	FindCountry.run().then(() => {
  FindUsersFromCountry.run().then(() => {
		 // Query dependent on FindUserFromCountry
});
	});
	},
	async fetchDataUsingCountries() {
		try {
			const countries = await FindCountry.run();
			const usersFromCountry = await FindUsersFromCountry.run({
				country: countries[0].country // "India" , "US"
			});
			return usersFromCountry;
		}
		catch (e) {
			console.log(e)
	}
	}
}