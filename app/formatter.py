# app/formatter.py

def format_report(title, count, data):
    """Return a formatted report string.

    Parameters
    ----------
    title : str
        The title of the report.
    count : int
        Number of items.
    data : dict
        Dictionary containing optional keys ``total`` and ``precision``.

    Returns
    -------
    str
        A human‑readable report string.
    """
    # Compute the rate as a percentage of the total.
    rate = count / max(data.get("total", 1), 1) * 100
    # Use the precision value from ``data`` if provided, otherwise default to 2.
    precision = data.get("precision", 2)
    # Build the report string using a single f‑string with a nested format
    # specifier for the precision value.
    report = f"Report: {title!r} | Items: {count:,} | Rate: {rate:.{precision}f}%"
    return report
