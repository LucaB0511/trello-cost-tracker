/* global TrelloPowerUp */

// Standardwährung
const DEFAULT_CURRENCY = '€';

// Hilfsfunktion zum Formatieren von Kosten
function formatCost(amount, currency) {
    if (!amount && amount !== 0) return '';
    const formatted = parseFloat(amount).toFixed(2);
    return `${formatted} ${currency}`;
}

// Hilfsfunktion zum Parsen von Kosten
function parseCost(costString) {
    if (!costString) return null;
    const match = costString.match(/([\d.,]+)\s*([€$£¥]?)/);
    if (match) {
        const amount = parseFloat(match[1].replace(',', '.'));
        const currency = match[2] || DEFAULT_CURRENCY;
        return { amount, currency };
    }
    return null;
}

TrelloPowerUp.initialize({
    // Card Badges - Zeigt Kosten als Badge auf der Karte
    'card-badges': function(t, options) {
        return t.get('card', 'shared', 'cost')
            .then(function(cost) {
                if (cost) {
                    const parsed = parseCost(cost);
                    if (parsed) {
                        return [{
                            icon: './images/icon.png',
                            text: formatCost(parsed.amount, parsed.currency),
                            color: 'blue'
                        }];
                    }
                }
                return [];
            });
    },

    // Card Buttons - Button zum Hinzufügen/Bearbeiten von Kosten
    'card-buttons': function(t, options) {
        return [{
            icon: './images/icon.png',
            text: 'Kosten',
            callback: function(t) {
                return t.popup({
                    title: 'Kosten erfassen',
                    url: './views/cost-editor.html',
                    height: 150
                });
            }
        }];
    },

    // List Actions - Button zum Anzeigen der Listenzusammenfassung
    'list-actions': function(t, options) {
        return [{
            text: 'Kosten zusammenfassen',
            callback: function(t) {
                return t.popup({
                    title: 'Kostenzusammenfassung',
                    url: './views/list-summary.html',
                    height: 200
                });
            }
        }];
    },

    // Show Settings - Einstellungen für Währung
    'show-settings': function(t, options) {
        return t.popup({
            title: 'Cost Tracker Einstellungen',
            url: './views/settings.html',
            height: 120
        });
    }
});
