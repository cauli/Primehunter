var positiveNatural = function (number, limit, result)
{
	result = typeof result !== 'undefined' ? result : [];

	if(number+1 > limit)
	{
		return result;
	}

	result.push(number);

	return positiveNatural(number+1, limit, result);
}

var positiveNaturalSkip = function (number, limit, skip, result)
{
	result = typeof result !== 'undefined' ? result : [];

	if(number+1+skip > limit)
	{
		return result;
	}

	result.push(number);

	return positiveNaturalSkip(number+1+skip, limit, skip, result);
}


var positiveNaturalSkipIncrement = function (number, limit, skip, increment, result)
{
	result = typeof result !== 'undefined' ? result : [];

	if(number+increment+skip > limit)
	{
		return result;
	}

	result.push(number);

	return positiveNaturalSkipIncrement(number+increment+skip, limit, skip, increment, result);
}